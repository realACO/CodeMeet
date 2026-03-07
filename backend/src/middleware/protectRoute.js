import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) {
        return res.status(401).json({ msg: "Unauthorized- invalid token" });
      }

      //find user in db by clerk id
      const user = await User.findOne({ clerkId });

      if (!user) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      req.user = user; //attach user to request
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware: ", error);
      res.status(500).json({ msg: "Server error" });
    }
  },
];

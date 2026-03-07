import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());

//credentials true meaning server allows browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use(clerkMiddleware()); //this will add auth object to the request if the user is authenticated, which we can use in our routes

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success api is running" });
});

//the protect route is a array of methods do each and every fucntion will run of the array, first it will check if the user is authenticated using clerk middleware and then it will check if the user exists in our database, if both checks pass then it will allow access to the route
app.get("/video-calls", protectRoute, (req, res) => {
  res.status(200).json({ msg: "success api is running in a protected route" });
});

if (ENV.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port ", ENV.PORT);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();

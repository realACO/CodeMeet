//to make the code clean we use this file to handle all the session related queries and mutations using react-query
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => {
      toast.success("Session created successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create session");
    },
  });
  return result;
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
  return result;
};

export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
  return result;
};

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["session"],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id, // take id and convert it to boolean
    refetchInterval: 5000, // refetch every 5 seconds to get the latest session data
  });
  return result;
};

export const useJoinSession = (id) => {
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: () => sessionApi.joinSession(id),
    onSuccess: () => {
      toast.success("Joined session successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to join session");
    },
  });
  return result;
};

export const useEndSession = (id) => {
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: () => sessionApi.endSession(id),
    onSuccess: () => {
      toast.success("Session ended successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to end session");
    },
  });
  return result;
};

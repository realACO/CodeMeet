// import { useState, useEffect } from "react";
// import { StreamChat } from "stream-chat";
// import toast from "react-hot-toast";
// import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
// import { sessionApi } from "../api/sessions";

// function useStreamClient(session, loadingSession, isHost, isParticipant) {
//   const [streamClient, setStreamClient] = useState(null);
//   const [call, setCall] = useState(null);
//   const [chatClient, setChatClient] = useState(null);
//   const [channel, setChannel] = useState(null);
//   const [isInitializingCall, setIsInitializingCall] = useState(true);

//   useEffect(() => {
//     let videoCall = null;
//     let chatClientInstance = null;

//     const initCall = async () => {
//       if (!session?.callId) return;
//       if (!isHost && !isParticipant) return;
//       if (session.status === "completed") return;

//       try {
//         const { token, userId, userName, userImage } =
//           await sessionApi.getStreamToken();

//         const client = await initializeStreamClient(
//           {
//             id: userId,
//             name: userName,
//             image: userImage,
//           },
//           token,
//         );

//         setStreamClient(client);

//         videoCall = client.call("default", session.callId);
//         await videoCall.join({ create: true });
//         setCall(videoCall);

//         const apiKey = import.meta.env.VITE_STREAM_API_KEY;
//         chatClientInstance = StreamChat.getInstance(apiKey);

//         await chatClientInstance.connectUser(
//           {
//             id: userId,
//             name: userName,
//             image: userImage,
//           },
//           token,
//         );
//         setChatClient(chatClientInstance);

//         const chatChannel = chatClientInstance.channel(
//           "messaging",
//           session.callId,
//         );
//         await chatChannel.watch();
//         setChannel(chatChannel);
//       } catch (error) {
//         toast.error("Failed to join video call");
//         console.error("Error init call", error);
//       } finally {
//         setIsInitializingCall(false);
//       }
//     };

//     if (session && !loadingSession) initCall();

//     // cleanup - performance reasons
//     return () => {
//       // iife imediatly involverd function involver- its a function that calls itself only once
//       (async () => {
//         try {
//           if (videoCall) await videoCall.leave();
//           if (chatClientInstance) await chatClientInstance.disconnectUser();
//           await disconnectStreamClient();
//         } catch (error) {
//           console.error("Cleanup error:", error);
//         }
//       })();
//     };
//   }, [session, loadingSession, isHost, isParticipant]);

//   return {
//     streamClient,
//     call,
//     chatClient,
//     channel,
//     isInitializingCall,
//   };
// }

// export default useStreamClient;

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { StreamChat } from "stream-chat";
import { sessionApi } from "../api/sessions";
import { initializeStreamClient } from "../lib/stream";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  const hasInitialized = useRef(false); // 🔥 prevents double init

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    let isMounted = true;

    const initCall = async () => {
      if (hasInitialized.current) return; // ✅ prevent duplicate runs
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "completed") return;

      hasInitialized.current = true;
      setIsInitializingCall(true);

      try {
        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        // initialize stream client
        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token,
        );
        if (!isMounted) return;
        setStreamClient(client);

        // join or reuse call
        videoCall = client.call("default", session.callId);
        if (videoCall.state !== "joined") {
          await videoCall.join({ create: true });
        }
        if (!isMounted) return;
        setCall(videoCall);

        // initialize chat client
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);
        if (!chatClientInstance.userID) {
          await chatClientInstance.connectUser(
            { id: userId, name: userName, image: userImage },
            token,
          );
        }
        if (!isMounted) return;
        setChatClient(chatClientInstance);

        // join or watch chat channel
        const chatChannel = chatClientInstance.channel(
          "messaging",
          session.callId,
        );
        await chatChannel.watch();
        if (!isMounted) return;
        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        if (isMounted) setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) {
      initCall();
    }

    return () => {
      isMounted = false;

      (async () => {
        try {
          // safely leave video call
          if (videoCall && videoCall.state !== "left") {
            await videoCall.leave();
          }
          // safely disconnect chat user
          if (chatClientInstance?.userID) {
            await chatClientInstance.disconnectUser();
          }
        } catch (error) {
          console.log("Cleanup safe ignore:", error.message);
        } finally {
          hasInitialized.current = false; // allow rejoin later
        }
      })();
    };
  }, [session?.callId, isHost, isParticipant, loadingSession]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;

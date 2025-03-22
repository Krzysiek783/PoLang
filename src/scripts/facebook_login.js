import * as Facebook from "expo-auth-session/providers/facebook";
import { FacebookAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useEffect, useState } from "react";

export const useFacebookLogin = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "969860155025779",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { accessToken } = response.authentication;
      const credential = FacebookAuthProvider.credential(accessToken);

      signInWithCredential(auth, credential)
        .then(() => console.log("✅ Facebook login successful"))
        .catch((error) => console.error("❌ Facebook login error:", error));
    }
  }, [response]);

  return { request, promptAsync };
};




// clientId: "969860155025779",
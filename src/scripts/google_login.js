import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session"; // 📌 Dodaj to!
import { useEffect, useState } from "react";

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true, // Działa na Expo Go
});


export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "591273198583-i38uk365f9mdqt1fh6qjkqi3pbgf1d65.apps.googleusercontent.com",
    expoClientId: "591273198583-14qms3topdj2t49f7ff1d3q6n9b3a1gr.apps.googleusercontent.com",
    webClientId: "591273198583-14qms3topdj2t49f7ff1d3q6n9b3a1gr.apps.googleusercontent.com", // 📌 Dodaj to!
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }), // 🚀 TO WAŻNE!
    scopes: ["profile", "email"], // 📌 Dodaj wymagane uprawnienia
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { idToken } = response.authentication; 
      if (!id_token) {
        console.error("❌ Brak tokena ID w odpowiedzi Google.");
        return;
      }

      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then(() => console.log("✅ Google login successful"))
        .catch((error) => console.error("❌ Google login error:", error));
    }
  }, [response]);

  return { request, promptAsync };
};

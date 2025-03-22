import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import InfoNavigator from "./InfoNavigate";
import SplashScreen from "../screens/splash";
import { auth } from "../scripts/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../scripts/firebaseConfig";
import LoginScreen from "../screens/SignLog_In/log_in";

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onboardingDone, setOnboardingDone] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists() && docSnap.data().onboardingDone) {
          setOnboardingDone(true);
        } else {
          setOnboardingDone(false);
        }
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigator />
      ) : onboardingDone ? (
        <LoginScreen />
      ) : (
        <InfoNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

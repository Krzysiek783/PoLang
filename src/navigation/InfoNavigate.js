import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WhyLearnScreen from "../screens/get_info/WhyLearn";
import GenderScreen from "../screens/get_info/Gender";
import AgeScreen from "../screens/get_info/Age";
import LevelScreen from "../screens/get_info/Level";
import NotificationScreen from "../screens/get_info/notificationScreen";
import NotificationService from "../scripts/notificationService"; // Powiadomienia
import { db, auth } from "../scripts/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const markOnboardingDone = async () => {
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, "users", user.uid), { onboardingDone: true }, { merge: true });
  }
};

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
  useEffect(() => {
    NotificationService.configure(); // Konfigurujemy powiadomienia przy starcie
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WhyLearn" component={WhyLearnScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Age" component={AgeScreen} />
      <Stack.Screen name="Level" component={LevelScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

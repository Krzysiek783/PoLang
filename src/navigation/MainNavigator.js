import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenuScreen from "../screens/Menu/main";


const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={MainMenuScreen} />
  </Stack.Navigator>
);

export default MainNavigator;

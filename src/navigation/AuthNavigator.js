import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/SignLog_In/start";
import LoginScreen from "../screens/SignLog_In/log_in";
import RegisterScreen from "../screens/SignLog_In/sign_in";
import GradientScreen from "../screens/gradient";
import ResetPasswordScreen from "../screens/SignLog_In/Reset_Pass";
import PasswordChangedScreen from "../screens/SignLog_In/pass_changed";
import VerificationScreen from "../screens/SignLog_In/email_verification";
import EmailVerificationScreen from "../screens/SignLog_In/kod_forgot_pass";
import ForgotPasswordScreen from "../screens/SignLog_In/forgot_pass";


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Gradient" component={GradientScreen} />
    <Stack.Screen name="ResetPass" component={ResetPasswordScreen}/>          
    <Stack.Screen name="PassChanged" component={PasswordChangedScreen}/>          
    <Stack.Screen name="Verification" component={VerificationScreen}/>
    <Stack.Screen name="ResetVerify" component={EmailVerificationScreen}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
  </Stack.Navigator>
  
);

export default AuthNavigator;

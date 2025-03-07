import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import SplashScreen from './src/screens/splash';
import WelcomeScreen from './src/screens/SignLog_In/start';
import GradientScreen from './src/screens/gradient';
import RegisterScreen from './src/screens/SignLog_In/sign_in';
import ResetPasswordScreen from './src/screens/SignLog_In/Reset_Pass';
import PasswordChangedScreen from './src/screens/SignLog_In/pass_changed';
import LoginScreen from './src/screens/SignLog_In/log_in';
import VerificationScreen from './src/screens/SignLog_In/kod_sign_in';
import EmailVerificationScreen from './src/screens/SignLog_In/kod_forgot_pass';
import ForgotPasswordScreen from './src/screens/SignLog_In/forgot_pass';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="gradient" component={GradientScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="ResetPass" component={ResetPasswordScreen}/>          
          <Stack.Screen name="PassChanged" component={PasswordChangedScreen}/>
          <Stack.Screen name="login" component={LoginScreen}/>
          <Stack.Screen name="Veryfication" component={VerificationScreen}/>
          <Stack.Screen name="ResetVerify" component={EmailVerificationScreen}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

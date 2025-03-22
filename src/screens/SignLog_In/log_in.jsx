import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // ℹ️ Ikony
import { useNavigation } from "@react-navigation/native";
import {  auth, signInWithEmailAndPassword  } from "../../scripts/firebaseConfig";
import { useGoogleLogin } from "../../scripts/google_login";
import { useFacebookLogin } from "../../scripts/facebook_login";

const LoginScreen = () => {
  const { promptAsync: googlePrompt } = useGoogleLogin();
  const { promptAsync: facebookPrompt } = useFacebookLogin();







  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Alert.alert("Sukces", "Zalogowano przez Google!");
    } catch (error) {
      Alert.alert("Błąd logowania", error.message);
    }
  };
  
  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      Alert.alert("Sukces", "Zalogowano przez Facebook!");
    } catch (error) {
      Alert.alert("Błąd logowania", error.message);
    }
  };
  





  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        Alert.alert("Błąd logowania", "Musisz zweryfikować swój adres e-mail przed zalogowaniem.");
        return;
      }
  
      Alert.alert("Sukces", "Zalogowano pomyślnie!");  
    } catch (error) {
      Alert.alert("Błąd logowania", error.message);
    }
  };

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Zaloguj Się</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Podaj email:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Wpisz email"
            value={email}
            onChangeText={setEmail}
          />
          <FontAwesome name="info-circle" size={20} color="gray" style={styles.icon} />
        </View>

        <Text style={styles.label}>Wprowadź Hasło:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Wpisz hasło"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <FontAwesome name="info-circle" size={20} color="gray" style={styles.icon} />
        </View>
      </View>

      {/* Przycisk Logowania */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Zaloguj się</Text>
      </TouchableOpacity>

      {/* Zapomniałeś hasło */}
      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPasswordText}>Zapomniałeś Hasło?</Text>
      </TouchableOpacity>

      {/* Logowanie przez Google i Facebooka */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => googlePrompt()}>
      <FontAwesome name="google" size={20} color="red" />
      <Text style={styles.socialText}> Użyj Konta Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.socialButton} onPress={() => facebookPrompt()}>
      <FontAwesome name="facebook" size={20} color="blue" />
      <Text style={styles.socialText}> Użyj Konta Facebook</Text>
    </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
  loginButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
  socialLoginContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
  },
  socialText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

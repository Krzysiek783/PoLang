import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db, createUserWithEmailAndPassword, sendEmailVerification, doc, setDoc } from "../../scripts/firebaseConfig";
import { useGoogleLogin } from "../../scripts/google_login";
import { useFacebookLogin } from "../../scripts/facebook_login";  // Dodaj Facebook login






const RegisterScreen = () => {
  const { request, promptAsync } = useGoogleLogin();
  const { request: facebookRequest, promptAsync: facebookPrompt } = useFacebookLogin();  // Pobierz Facebook login

  



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  
const handleRegister = async () => {
  if (password !== confirmPassword) {
    Alert.alert("Błąd", "Hasła nie są takie same!");
    return;
  }

  try {
    // 🔹 Tworzenie użytkownika w Firebase Auth (Firebase go rejestruje, ale nie wpuszczamy go do aplikacji)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 🔹 Wysłanie maila weryfikacyjnego
    await sendEmailVerification(user);

    // 🔹 Dodanie użytkownika do Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
      level: "beginner",
      verified: false, // Konto NIE jest zweryfikowane
    });

    Alert.alert("Sukces!", "Wysłaliśmy e-mail weryfikacyjny. Sprawdź swoją skrzynkę pocztową!");

    // 🔹 Przekierowanie na ekran oczekiwania na weryfikację
    //navigation.navigate("Verification");

  } catch (error) {
    Alert.alert("Błąd rejestracji", error.message);
  }
};
  

  return (
    <LinearGradient colors={["#E8D6CD", "#C2A99A"]} style={styles.container}>
      <Text style={styles.header}>Zarejestruj Się</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Podaj Swój email:</Text>
        <TextInput style={styles.inputWrapper} placeholder="Wpisz email" value={email} onChangeText={setEmail} />

        <Text style={styles.label}>Wprowadź Hasło:</Text>
        <TextInput style={styles.inputWrapper} placeholder="Wpisz hasło" secureTextEntry value={password} onChangeText={setPassword} />

        <Text style={styles.label}>Powtórz Hasło:</Text>
        <TextInput style={styles.inputWrapper} placeholder="Powtórz hasło" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Zarejestruj się</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
      <TouchableOpacity 
      style={styles.socialButton} 
      onPress={() => {
        if (request) {
          promptAsync(); 
        } else {
          console.error("Google login request is null.");
        }
      }}
    >
      <FontAwesome name="google" size={20} color="red" />
      <Text style={styles.socialText}> Użyj Konta Google</Text>
    </TouchableOpacity>

    {/* 🔹 Logowanie Facebook */}
    <TouchableOpacity 
        style={styles.socialButton} 
        onPress={() => {
          if (facebookRequest) {
            facebookPrompt();
          } else {
            console.error("Facebook login request is null.");
          }
        }}
      >
        <FontAwesome name="facebook" size={20} color="blue" />
        <Text style={styles.socialText}> Użyj Konta Facebook</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegisterScreen;


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
  registerButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
  terms: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  link: {
    color: "#00C8FF",
    fontWeight: "bold",
  },
});

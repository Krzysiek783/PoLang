import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // ℹ️ Ikonki

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Zarejestruj Się</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Podaj Swój email:</Text>
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

        <Text style={styles.label}>Powtórz Hasło:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Powtórz hasło"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <FontAwesome name="info-circle" size={20} color="gray" style={styles.icon} />
        </View>
      </View>

      {/* Przycisk Rejestracji */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Zare jestruj się</Text>
      </TouchableOpacity>

      {/* Logowanie przez Google i Facebooka */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={20} color="red" />
          <Text style={styles.socialText}> Użyj Konta Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={20} color="blue" />
          <Text style={styles.socialText}> Użyj Konta Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Regulamin */}
      <Text style={styles.terms}>
        Zakładając Konto Akceptujesz nasz <Text style={styles.link}>Regulamin</Text>. To w jaki sposób gromadzimy i wykorzystujemy twoje dane, opisuje nasza {" "}
        <Text style={styles.link}>Polityka Prywatności</Text>.
      </Text>
    </LinearGradient>
  );
}

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

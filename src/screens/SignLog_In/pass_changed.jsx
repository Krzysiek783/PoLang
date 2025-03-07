import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"; // Ikona efektu "błysku"
import { useNavigation } from "@react-navigation/native";

export default function PasswordChangedScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      {/* Ikona efektu "błysku" */}
      <Ionicons name="sparkles-outline" size={50} color="#00C8FF" style={styles.icon} />

      <Text style={styles.header}>Hasło Zmienione!</Text>

      <Text style={styles.description}>
        Twoje hasło zostało zmienione pomyślnie!{"\n"}
        Możesz ponownie się zalogować.
      </Text>

      {/* Przycisk Logowania */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.loginButtonText}>Logowanie</Text>
      </TouchableOpacity>
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
  icon: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


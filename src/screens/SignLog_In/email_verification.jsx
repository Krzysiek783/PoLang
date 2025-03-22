import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function VerificationScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Zweryfikuj Swój Email</Text>

      <Text style={styles.description}>
        Wysłaliśmy na Twój adres e-mail wiadomość weryfikacyjną.{"\n"}
        Sprawdź swoją skrzynkę pocztową i kliknij w link, aby aktywować konto.
      </Text>

      <Text style={styles.note}>
        Jeśli nie widzisz wiadomości, sprawdź folder Spam lub spróbuj ponownie.
      </Text>

      {/* Przycisk powrotu do ekranu logowania */}
      <TouchableOpacity 
        style={styles.backToLoginButton} 
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.backToLoginText}>Powrót do logowania</Text>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  note: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  backToLoginButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  backToLoginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

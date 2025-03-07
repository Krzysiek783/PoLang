import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // ℹ️ Ikona informacyjna
import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    if (password.length < 6) {
      alert("Hasło musi mieć co najmniej 6 znaków!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Hasła się nie zgadzają!");
      return;
    }
    alert("Hasło zostało zresetowane!");
    navigation.navigate("PassChanged"); // Przekierowanie do logowania
  };

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Zresetuj Hasło</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Wprowadź nowe Hasło:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Nowe hasło"
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
            placeholder="Potwierdź hasło"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <FontAwesome name="info-circle" size={20} color="gray" style={styles.icon} />
        </View>
      </View>

      {/* Przycisk Ustaw Hasło */}
      <TouchableOpacity 
        style={[
          styles.resetButton, 
          password && confirmPassword ? styles.resetButtonActive : styles.resetButtonDisabled
        ]}
        onPress={handleResetPassword}
        disabled={!password || !confirmPassword}
      >
        <Text style={styles.resetButtonText}>Ustaw Hasło</Text>
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
  resetButton: {
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  resetButtonActive: {
    backgroundColor: "#6F6F6F",
  },
  resetButtonDisabled: {
    backgroundColor: "#A0A0A0",
  },
  resetButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


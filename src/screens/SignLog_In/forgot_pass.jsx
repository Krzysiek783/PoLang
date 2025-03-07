import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // ℹ️ Ikona w polu e-maila
import { useNavigation } from "@react-navigation/native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSendCode = () => {
    alert(`Kod weryfikacyjny wysłany na: ${email}`);
  };

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Zapomniałeś Hasła?</Text>

      <Text style={styles.description}>
        Nie martw się, zdarza się najlepszym.{"\n"}
        Możemy wysłać kod weryfikujący cię{"\n"}
        na podany przez ciebie adres email:
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Podaj email na który wyślemy kod weryfikujący:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Wpisz email"
            value={email}
            onChangeText={setEmail}
          />
          <FontAwesome name="info-circle" size={20} color="gray" style={styles.icon} />
        </View>
      </View>

      {/* Przycisk Wyślij Kod */}
      <TouchableOpacity 
        style={styles.sendButton} 
       // onPress={handleSendCode}
        onPress={()=> navigation.navigate("ResetVerify")}
        disabled={!email} // Blokada przycisku, jeśli pole jest puste
      >
        <Text style={styles.sendButtonText}>Wyślij Kod</Text>
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
  },
  description: {
    fontSize: 16,
    textAlign: "center",
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
  sendButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


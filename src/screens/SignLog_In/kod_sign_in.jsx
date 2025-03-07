import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function VerificationScreen() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.header}>Wprowadź Kod:</Text>

      <Text style={styles.description}>
        Wysłaliśmy na Twój email **(TUTAJMEIL)**{"\n"}
        5-cyfrowy kod aktywacyjny{"\n"}
        Wpisz go poniżej:
      </Text>

      {/* Pole na kod OTP */}
      <OTPInputView
        style={styles.otpContainer}
        pinCount={5}
        code={otp}
        onCodeChanged={(code) => setOtp(code)}
        autoFocusOnLoad
        codeInputFieldStyle={styles.otpBox}
        codeInputHighlightStyle={styles.otpBoxActive}
      />

      {/* Przycisk ponownego wysłania kodu */}
      <TouchableOpacity disabled={timer > 0} style={styles.resendButton}>
        <Text style={styles.resendText}>
          Wyślij kod ponownie{"  "}
          {timer > 0 ? `0${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}` : ""}
        </Text>
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
  otpContainer: {
    width: "80%",
    height: 80,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#E8D6CD",
  },
  otpBoxActive: {
    borderColor: "#6F6F6F",
  },
  resendButton: {
    marginTop: 20,
  },
  resendText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});


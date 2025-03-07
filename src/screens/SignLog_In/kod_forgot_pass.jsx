import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";

export default function EmailVerificationScreen() {
  const [otp, setOtp] = useState(""); // Upewnij się, że nie jest `null`
  const [timer, setTimer] = useState(60);
  const navigation = useNavigation();
  
  // Hooki do obsługi pola kodu
  const ref = useBlurOnFulfill({ value: otp, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  // Timer do ponownego wysłania kodu
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Funkcja obsługująca weryfikację kodu
  const handleVerifyCode = () => {
    if (otp.length === 4) {
      alert("Kod zweryfikowany! Możesz zresetować hasło.");
      navigation.navigate("ResetPass");
    } else {
      alert("Wprowadź poprawny 4-cyfrowy kod!");
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
      <Text style={styles.header}>Wprowadź Kod:</Text>
      <Text style={styles.description}>
        Wysłaliśmy na Twój email (TUTAJMEIL){"\n"} 4-cyfrowy kod weryfikacyjny.{"\n"} Wpisz go poniżej:
      </Text>

      {/* Nowe pole kodu OTP */}
      <CodeField
        ref={ref}
        {...props}
        value={otp}
        onChangeText={setOtp}
        cellCount={4}
        rootStyle={styles.otpContainer}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.otpBox, isFocused && styles.otpBoxActive]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || "_"}
          </Text>
        )}
      />

      {/* Przycisk Zweryfikuj Kod */}
      <TouchableOpacity 
        style={[styles.verifyButton, otp.length === 4 ? styles.activeButton : styles.disabledButton]} 
        onPress={handleVerifyCode}
        disabled={otp.length !== 4}
      >
        <Text style={styles.verifyButtonText}>Zweryfikuj Kod</Text>
      </TouchableOpacity>

      {/* Przycisk Ponownego Wysłania Kodu */}
      <TouchableOpacity disabled={timer > 0} style={styles.resendButton}>
        <Text style={styles.resendText}>
          Wyślij kod ponownie {timer > 0 ? `0${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}` : ""}
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
  verifyButton: {
    borderRadius: 10,
    paddingVertical: 12,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  activeButton: {
    backgroundColor: "#6F6F6F",
  },
  disabledButton: {
    backgroundColor: "#A0A0A0",
  },
  verifyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resendButton: {
    marginTop: 10,
  },
  resendText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

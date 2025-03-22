import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const levels = [
  { label: "Nie znam angielskiego", value: "A0" },
  { label: "Podstawowy (A1-A2)", value: "A1-A2" },
  { label: "Średniozaawansowany (B1-B2)", value: "B1-B2" },
  { label: "Zaawansowany (C1-C2)", value: "C1-C2" },
  { label: "Biegły/native speaker", value: "C2+" },
];

export default function LevelScreen({ navigation }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <Text style={styles.title}>Jaki jest twój poziom angielskiego?</Text>
      {levels.map((level) => (
        <TouchableOpacity
          key={level.value}
          style={[
            styles.option,
            selectedLevel === level.value && styles.selected,
          ]}
          onPress={() => setSelectedLevel(level.value)}
        >
          <Text
            style={[
              styles.optionText,
              selectedLevel === level.value && styles.selectedText,
            ]}
          >
            {level.label}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => console.log(`Wybrany poziom: ${selectedLevel}`)}>
        <Text style={styles.buttonText}>Zakończ</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  option: { padding: 15, marginVertical: 5, borderRadius: 10, backgroundColor: "#E6E6FA" },
  selected: { backgroundColor: "#FFD700" }, // Podświetlenie dla wybranego poziomu
  optionText: { textAlign: "center", color: "#4A4A4A", fontSize: 16 },
  selectedText: { color: "#000", fontWeight: "bold" },
  button: { marginTop: 20, padding: 15, borderRadius: 10, backgroundColor: "#6D5B4D" },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});

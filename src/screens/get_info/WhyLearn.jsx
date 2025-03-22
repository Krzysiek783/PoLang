import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const reasons = [
  "Dla lepszej pracy",
  "Dla rozwoju osobistego",
  "Bo to język międzynarodowy",
  "Chcę mieszkać za granicą",
  "Aby zdać egzamin językowy",
];

export default function WhyLearnScreen({ navigation }) {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (reason) => {
    setSelected((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  return (
    <LinearGradient colors={["#E8D6CD", "#C2A99A"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.79, 1]} style={styles.container}>
      <Text style={styles.title}>Dlaczego chcesz się uczyć angielskiego?</Text>
      {reasons.map((reason) => (
        <TouchableOpacity
          key={reason}
          style={[styles.option, selected.includes(reason) && styles.selected]}
          onPress={() => toggleSelection(reason)}
        >
          <Text style={styles.optionText}>{reason}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Gender")}>
        <Text style={styles.buttonText}>Kontynuuj</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { padding: 15, marginVertical: 5, borderRadius: 10, backgroundColor: "#E6A57E" },
  selected: { backgroundColor: "#D07F67" },
  optionText: { textAlign: "center", color: "white", fontSize: 16 },
  button: { marginTop: 20, padding: 15, borderRadius: 10, backgroundColor: "#6D5B4D" },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});

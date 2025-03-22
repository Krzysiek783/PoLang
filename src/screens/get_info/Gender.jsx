import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function GenderScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <LinearGradient colors={["#E8D6CD", "#C2A99A"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.79, 1]} style={styles.container}>
      <Text style={styles.title}>Jaką masz płeć?</Text>
      <TouchableOpacity
        style={[styles.option, selectedGender === "Male" && styles.selected]}
        onPress={() => setSelectedGender("Male")}
      >
        <Text style={styles.optionText}>Male ♂</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedGender === "Female" && styles.selected]}
        onPress={() => setSelectedGender("Female")}
      >
        <Text style={styles.optionText}>Female ♀</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Age")}>
        <Text style={styles.buttonText}>Kontynuuj</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { padding: 15, marginVertical: 5, width: 150, borderRadius: 10, backgroundColor: "#E6A57E" },
  selected: { backgroundColor: "#D07F67" },
  optionText: { textAlign: "center", color: "white", fontSize: 16 },
  button: { marginTop: 20, padding: 15, borderRadius: 10, backgroundColor: "#6D5B4D" },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function AgeScreen({ navigation }) {
  const [age, setAge] = useState(28);

  return (
    <LinearGradient colors={["#E8D6CD", "#C2A99A"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.79, 1]} style={styles.container}>
      <Text style={styles.title}>Ile masz lat?</Text>
      <Text style={styles.age}>{age}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Level")}>
        <Text style={styles.buttonText}>Kontynuuj</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  age: { fontSize: 50, fontWeight: "bold" },
  button: { marginTop: 20, padding: 15, borderRadius: 10, backgroundColor: "#6D5B4D" },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});
   
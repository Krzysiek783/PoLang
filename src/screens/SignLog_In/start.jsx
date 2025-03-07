import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.79, 1]}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Nagłówek */}
        <Text style={styles.title}>
          Dlaczego <Text style={styles.pobrand}>Po</Text>
          <Text style={styles.brand}>Lang</Text> ?
        </Text>

        {/* Lista korzyści */}
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="checkmark" size={20} color="black" />
            <Text style={styles.listText}>Nauka dostosowana dla ciebie</Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons name="checkmark" size={20} color="black" />
            <Text style={styles.listText}>Regularnie zwiększaj swoje umiejętności</Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons name="checkmark" size={20} color="black" />
            <Text style={styles.listText}>Po prostu ciesz się nauką</Text>
          </View>
        </View>

        {/* Przyciski */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}
            onPress={() => navigation.navigate("Register")}>
            <Text style={styles.startButtonText}>Rozpocznij</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Lub</Text>

          <TouchableOpacity style={styles.loginButton}
          onPress={()=> navigation.navigate("login")}>
            <Text style={styles.loginButtonText}>Mam już Konto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate("gradient")}
          >
            <Text style={styles.startButtonText}>Przycisk PomocniczyForMe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
} 

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  pobrand: {
    color: "#6F6F6F",
    fontWeight: "bold",
  },
  brand: {
    color: "#00C8FF",
    fontWeight: "bold",
  },
  list: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10, // Ustala równą przerwę między przyciskami
  },
  startButton: {
    backgroundColor: "#6F6F6F",
    borderRadius: 10,
    paddingVertical: 12,
    width: "80%", // Ustala jednakową szerokość przycisków
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#00C8FF",
    borderRadius: 10,
    paddingVertical: 12,
    width: "80%", // Ustala jednakową szerokość przycisków
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


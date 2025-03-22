import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


export default function GradientScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
    colors={[ "#00FF00", "#0000FF"]} // Czerwony → Zielony → Niebieski
    //start={{ x: 0, y: 0 }}
    //end={{ x: , y: 1 }}
    //locations={[0.1, 0.5, 0.9]} // Kolory rozmieszczone w 10%, 50%, 90% długości gradientu
    style={styles.container}
    >
      
      <Text style={styles.text}>Gradientowy ekran 🎨</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Main")}>
        <Text>yhhgyjbk</Text>
      </TouchableOpacity>



    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


export default function SplashScreen() {
    const navigation = useNavigation(); // Pobranie obiektu navigation
  
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("Home"); // Nawigacja po 3 sekundach
      }, 3000);
    }, []);
  
    return (
    <LinearGradient colors={["#17D5FF", "#15BEE4","#0E8099"]}
    start={{x:0, y:0}}
    end={{x:0, y:1}}
    locations={[0.19,0.38,1]}  
    
    style={styles.container}>
    
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Ucz się Angielskiego {"\n"}Na własnych Zasadach</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

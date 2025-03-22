import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_WIDTH = Dimensions.get("window").width;

// 🔹 ANIMOWANE LEWITUJĄCE BLOKI
const FloatingBlocks = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, { toValue: -10, duration: 1000, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 10, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.blocksContainer}>
      {[1, 2, 3].map((item) => (
        <Animated.View key={item} style={[styles.block, { transform: [{ translateY }] }]}>
          <Text style={styles.blockText}>Blok {item}</Text>
        </Animated.View>
      ))}
    </View>
  );
};

// 🔹 MENU UŻYTKOWNIKA (Boczne)
const UserMenu = () => {
  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.userText}>👤 Użytkownik</Text>
      <Text style={styles.menuItem}>🔧 Ustawienia</Text>
      <Text style={styles.menuItem}>📄 Moje dane</Text>
      <Text style={styles.menuItem}>🚪 Wyloguj</Text>
    </View>
  );
};

// 🔹 EKRAN GŁÓWNY
const MainScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#E8D6CD", "#C2A99A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Przycisk otwierania bocznego menu */}
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity>

      {/* Lewitujące bloki */}
      <FloatingBlocks />
    </LinearGradient>
  );
};

// 🔹 KONFIGURACJA NAWIGACJI (Drawer + Bottom Tabs)
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Pasek boczny (Drawer)
const DrawerMenu = () => (
  <Drawer.Navigator drawerContent={() => <UserMenu />}>
    <Drawer.Screen name="Menu" component={MainScreen} />
  </Drawer.Navigator>
);

// Dolny pasek nawigacyjny (Bottom Tabs)
const MainMenuScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = route.name === "Home" ? "home" : "settings";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: { backgroundColor: "#6F6F6F" },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "#A0A0A0",
    })}
  >
    <Tab.Screen name="Home" component={DrawerMenu} options={{ headerShown: false }} />
    <Tab.Screen name="Ustawienia" component={MainScreen} />
  </Tab.Navigator>
);

export default MainMenuScreen;

// 🔹 STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#6F6F6F",
    padding: 10,
    borderRadius: 50,
  },
  blocksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: SCREEN_WIDTH * 0.9,
    marginTop: 20,
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  blockText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  userText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

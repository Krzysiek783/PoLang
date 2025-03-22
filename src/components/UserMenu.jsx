import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userText}>👤 Użytkownik</Text>
      <Text style={styles.menuItem}>🔧 Ustawienia</Text>
      <Text style={styles.menuItem}>📄 Moje dane</Text>
      <Text style={styles.menuItem}>🚪 Wyloguj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default UserMenu;

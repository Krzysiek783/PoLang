import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from "@react-native-community/datetimepicker"; // Importujemy picker czasu
import AsyncStorage from "@react-native-async-storage/async-storage"; // Do zapisu preferencji użytkownika


export default function NotificationScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSavePreferences = async () => {
    await AsyncStorage.setItem("notificationsEnabled", JSON.stringify(notificationsEnabled));
    await AsyncStorage.setItem("notificationTime", selectedTime.toISOString());
    console.log("Powiadomienia zapisane:", notificationsEnabled, selectedTime);
    navigation.navigate("Home"); // Przechodzimy do ekranu głównego
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <LinearGradient
        colors={["#E8D6CD", "#C2A99A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.79, 1]}
        style={styles.gradient}
      >
        <Text style={styles.title}>Chcesz otrzymywać powiadomienia?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.option, notificationsEnabled && styles.selected]}
            onPress={() => setNotificationsEnabled(true)}
          >
            <Text style={styles.optionText}>Tak, chcę przypomnienia ⏰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, !notificationsEnabled && styles.selected]}
            onPress={() => setNotificationsEnabled(false)}
          >
            <Text style={styles.optionText}>Nie, dziękuję 🚫</Text>
          </TouchableOpacity>
        </View>

        {notificationsEnabled && (
          <View style={styles.timePickerContainer}>
            <Text style={styles.subTitle}>Wybierz godzinę przypomnienia:</Text>
            <TouchableOpacity style={styles.timeButton} onPress={() => setShowPicker(true)}>
              <Text style={styles.timeText}>{selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="spinner"
                onChange={(event, selected) => {
                  setShowPicker(false);
                  if (selected) setSelectedTime(selected);
                }}
              />
            )}
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSavePreferences}>
          <Text style={styles.buttonText}>Zapisz i kontynuuj</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  subTitle: { fontSize: 18, textAlign: "center", marginBottom: 10 },
  buttonContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  option: { padding: 15, borderRadius: 10, marginHorizontal: 10, backgroundColor: "#E6E6FA" },
  selected: { backgroundColor: "#FFD700" }, // Podświetlenie wybranej opcji
  optionText: { textAlign: "center", color: "#4A4A4A", fontSize: 16 },
  timePickerContainer: { alignItems: "center", marginVertical: 20 },
  timeButton: { padding: 10, backgroundColor: "#6D5B4D", borderRadius: 10 },
  timeText: { color: "white", fontSize: 18 },
  button: { padding: 15, borderRadius: 10, backgroundColor: "#6D5B4D", alignSelf: "center" },
  buttonText: { textAlign: "center", color: "white", fontWeight: "bold" },
});

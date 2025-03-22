import * as Notifications from 'expo-notifications';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Konfiguracja notyfikacji (na Androidzie ustaw kanał)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

class NotificationService {
  async configure() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Brak uprawnień do powiadomień!');
    }
  }

  async scheduleDailyNotification() {
    const notificationsEnabled = JSON.parse(await AsyncStorage.getItem("notificationsEnabled"));
    const notificationTimeRaw = await AsyncStorage.getItem("notificationTime");
    if (!notificationsEnabled || !notificationTimeRaw) return;

    const notificationTime = new Date(notificationTimeRaw);
    const triggerHour = notificationTime.getHours();
    const triggerMinute = notificationTime.getMinutes();

    await Notifications.cancelAllScheduledNotificationsAsync(); // Usuń stare notyfikacje

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📚 Czas na naukę angielskiego!",
        body: "Nie zapomnij powtórzyć nowych słówek!",
        sound: true,
      },
      trigger: {
        hour: triggerHour,
        minute: triggerMinute,
        repeats: true,
      },
    });

    console.log(`📆 Zaplanowano powiadomienie na ${triggerHour}:${triggerMinute}`);
  }
}

export default new NotificationService();

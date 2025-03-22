import { db } from "./firebaseConfig"; // Importujemy `db`, zamiast inicjalizować Firebase
import { doc, setDoc, getDoc } from "firebase/firestore";

// 🔥 Funkcja testująca połączenie z Firestore
const testFirestoreConnection = async () => {
  try {
    // Testowy zapis do Firestore
    await setDoc(doc(db, "testCollection", "testDoc"), {
      message: 'Firebase działa! 🚀',
      timestamp: new Date(),
    });

    console.log('🔥 Firestore: Dokument zapisany!');

    // Testowy odczyt z Firestore
    const docSnap = await getDoc(doc(db, "testCollection", "testDoc"));
    if (docSnap.exists()) {
      console.log('📄 Odczytany dokument:', docSnap.data());
    } else {
      console.log('⚠️ Dokument nie istnieje!');
    }
  } catch (error) {
    console.error('❌ Błąd połączenia z Firestore:', error);
  }
};

export default testFirestoreConnection;

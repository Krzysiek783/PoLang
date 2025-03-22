import 'react-native-reanimated';
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import testFirestoreConnection from "./src/scripts/firebaseTest";



export default function App() {
  useEffect(() => {
    testFirestoreConnection();
  }, []);

  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StudentList from "./pages/StudentTab";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StudentList />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

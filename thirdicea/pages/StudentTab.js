import { View } from "react-native";
import { Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentList from "./StudentList";
import Profile from "./Profile";
import addNewStudent from "./addNewstudent";
import updateStudent from "./updateStudent";
export default function StudentTab() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StudentList"
      screenOptions={{
        headerStyle: { backgroundColor: "#4b0150" },
        headerTintColor: "#ffff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="StudentList"
        component={StudentList}
        options={{ title: "Student List" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />

      <Stack.Screen
        name="addStudent"
        component={addNewStudent}
        options={{ title: "Add New Student" }}
      />
      <Stack.Screen
        name="updateStudent"
        component={updateStudent}
        options={{ title: "update Student" }}
      />
    </Stack.Navigator>
  );
}

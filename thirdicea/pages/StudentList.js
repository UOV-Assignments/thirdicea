import { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { Button, PaperProvider, Text } from "react-native-paper";
import { students } from "../assets/db/StudentsDb";
import { useNavigation } from "@react-navigation/native";

export default function StudentList() {
  const [fstudents, setFstudents] = useState(students);
  const [rerender, setRerender] = useState(false);
  const navigator = useNavigation();
  return (
    <PaperProvider>
      <FlatList
        data={fstudents}
        keyExtractor={(item) => item.id}
        extraData={rerender}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigator.navigate("Profile", { user: item })}
          >
            <Image source={item.profile_pic} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttoncontainer}>
        <Button
          mode="contained"
          style={styles.addbutton}
          contentStyle={styles.content}
        >
          +
        </Button>
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  imagepad: {
    padding: 8,
    alignItems: "center",
    flex: 1,
    marginBottom: 15,
    marginTop: 5,
  },
  headerimage: {
    width: "80%",
    height: 73,
  },
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 5,
    marginBottom: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  body: {
    flex: 8,
    width: "100%",
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#4b0150",
  },
  scrollView: {
    flexGrow: 1, // Ensures the ScrollView behaves correctly
  },
  list: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: "flex-end", // Aligns the button to the bottom
    alignItems: "flex-end", // Aligns the button to the right
    padding: 16, // Adds padding to avoid edge clipping
    backgroundColor: "#f9f9f9",
  },
  addbutton: {
    width: 60, // Square dimensions
    height: 60,
    borderRadius: 8, // Slightly rounded corners
    backgroundColor: "#4b0150",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

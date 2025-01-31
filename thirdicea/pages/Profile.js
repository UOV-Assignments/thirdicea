import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Profile({ route }) {
  const { user } = route.params;
  const navigator = useNavigation();
  console.log(user);
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => navigator.navigate("updateStudent")}>add</Button>
    </View>
  );
}

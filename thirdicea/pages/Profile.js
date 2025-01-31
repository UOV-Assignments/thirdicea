import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Profile({ route }) {
  const { user } = route.params;
  console.log(user);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

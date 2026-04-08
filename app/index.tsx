import { Text, View } from "react-native";
import ProfileCard from "./Profile";

export default function Home() {
  return (
    <View className="bg-gray-200 rounded-lg m-20">
      <ProfileCard name="Pushpesh" age={30}>
        <Text>Frontend Developer</Text>
      </ProfileCard>
    </View>
  );
}

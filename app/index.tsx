import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="relative h-80 bg-gray-200">
      <View className="z-10 absolute bottom-10 left-10 bg-green-400 p-5">
        <Text>Badge</Text>
      </View>
      <View className="bg-red-400 p-5">
        <Text>Badge</Text>
      </View>
    </View>
  );
}

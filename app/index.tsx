import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <View className="absolute bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg">
        <Text className="text-white">+</Text>
      </View>
    </View>
  );
}

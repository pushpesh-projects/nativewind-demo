import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="relative w-16 h-16 bg-gray-300 rounded-full">
      <View className="absolute top-0 right-0 bg-red-500 w-5 h-5 rounded-full justify-center items-center">
        <Text className="text-white text-xs">3</Text>
      </View>
    </View>
  );
}

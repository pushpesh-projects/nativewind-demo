import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="relative h-40 bg-gray-200">
      <View className="border-4 border-blue-800 absolute inset-0  justify-center items-center bg-black/50 ">
        <Text className="text-white">Overlay</Text>
      </View>
    </View>
  );
}

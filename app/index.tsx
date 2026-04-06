import { View } from "react-native";

export default function Index() {
  return (
    <View className="relative h-40">
      <View className="absolute inset-0 bg-red-300 z-30" />

      <View className="absolute inset-0 bg-blue-300 z-20" />
    </View>
  );
}

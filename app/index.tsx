import { BlurView } from "expo-blur";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-300">
      <BlurView intensity={60} tint="light" className="p-6 rounded-xl">
        <Text className="text-black font-semibold">Glass Effect</Text>
      </BlurView>
    </View>
  );
}

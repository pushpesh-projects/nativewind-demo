import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#06b6d4", "#3b82f6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="p-4 rounded-lg"
    >
      <Text className="text-white text-center">Horizontal Gradient</Text>
    </LinearGradient>
  );
}

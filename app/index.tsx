import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#22c55e", "#16a34a"]}
      className="p-4 rounded-full"
    >
      <Text className="text-white text-center font-semibold">Continue</Text>
    </LinearGradient>
  );
}

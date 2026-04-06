import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView horizontal className="p-4">
      <View className="flex-row gap-4">
        <View className="w-40 h-40 bg-red-300" />
        <View className="w-40 h-40 bg-blue-300" />
        <View className="w-40 h-40 bg-green-300" />
        <View className="w-40 h-40 bg-red-300" />
        <View className="w-40 h-40 bg-blue-300" />
        <View className="w-40 h-40 bg-green-300" />
        <View className="w-40 h-40 bg-red-300" />
        <View className="w-40 h-40 bg-blue-300" />
        <View className="w-40 h-40 bg-green-300" />
        <View className="w-40 h-40 bg-red-300" />
        <View className="w-40 h-40 bg-blue-300" />
        <View className="w-40 h-40 bg-green-300" />
      </View>
    </ScrollView>
  );
}

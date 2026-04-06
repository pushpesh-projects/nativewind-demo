import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="space-y-4">
        <View className="bg-white p-4 rounded-lg">
          <Text>Card 1</Text>
        </View>

        <View className="bg-white p-4 rounded-lg">
          <Text>Card 2</Text>
        </View>
      </View>
    </ScrollView>
  );
}

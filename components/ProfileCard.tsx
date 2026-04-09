import { Text, View } from "react-native";

interface ProfileCardProps {
  name: string;
  age: number;
  children: React.ReactNode;
}

export default function ProfileCard({
  name,
  age,
  children,
}: ProfileCardProps) {
  return (
    <View className="p-5 bg-white rounded-lg border border-red-300">
      <Text className="text-center text-black mb-2 font-bold"> {name}</Text>
      <Text className="text-center text-black mb-2"> Age: {age}</Text>
      <View className="mt-2 items-center">{children}</View>
    </View>
  );
}

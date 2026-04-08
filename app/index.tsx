import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import ProfileCard from "./Profile";

type User = {
  name: string;
  age: number;
};
export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  if (!user)
    return (
      <View className="m-20 ">
        <View className="bg-gray-200 rounded-lg mb-5">
          <Text className="p-10 text-center">No user</Text>
        </View>
        <View>
          <Pressable
            className="bg-blue-400"
            onPress={() => setUser({ name: "Pushpesh", age: 35 })}
          >
            <Text className="p-5  text-black text-center font-bold">
              {" "}
              Load User
            </Text>
          </Pressable>
        </View>
      </View>
    );

  return (
    <View className=" rounded-lg m-20">
      <ProfileCard name={user.name} age={user.age}>
        <Text>Frontend Developer</Text>
      </ProfileCard>
      <Pressable className="bg-blue-400 mt-5" onPress={() => setUser(null)}>
        <Text className="text-center  text-black  p-5">Remove User</Text>
      </Pressable>
    </View>
  );
}

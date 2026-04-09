import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

type User = {
  id: string;
  name: string;
  age: number;
};

const users: User[] = [
  { id: "1", name: "Pushpesh", age: 30 },
  { id: "2", name: "Kanchan", age: 25 },
  { id: "3", name: "Jigyansh", age: 55 },
];
export default function UserList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handlePress = (item: User) => {
    console.log(`User clicked: ${item.name}`);
    setSelectedId(item.id);
  };
  return (
    <FlatList<User>
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isSelected = item.id === selectedId;
        return (
          <Pressable onPress={() => handlePress(item)}>
            <View
              className={` border mb-5 p-4 ${isSelected ? "bg-green-200" : "bg-blue-200"} `}
            >
              <Text>
                Name: {item.name},Age: {item.age}
              </Text>
            </View>
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

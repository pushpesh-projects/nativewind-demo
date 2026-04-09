import { useState } from "react";
import {
  GestureResponderEvent,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type Position = {
  x: number;
  y: number;
};

export default function EventDemo() {
  const [text, setText] = useState("");

  const [position, setPosition] = useState<Position | null>(null);

  const handlePress = (e: GestureResponderEvent) => {
    const { pageX, pageY } = e.nativeEvent;
    setPosition({ x: pageX, y: pageY });
  };

  const clickMessage = position
    ? `You clicked at x:${position.x}, y: ${position.y}`
    : "You have not clicked yet";

  const typingMessage = text
    ? `You typed: ${text}`
    : "Please type in the input box to see your message";
  return (
    <View className="bg-gray-100 rounded-lg border border-amber-700">
      <TextInput
        className="p-5 m-5 rounded-lg border border-amber-700 text-center"
        placeholder="Enter text"
        value={text}
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blurred")}
        onChangeText={setText}
        // onChangeText={(value) => setText(value)}
      ></TextInput>

      <Text className="p-5 m-5 rounded-lg border border-amber-700 text-center font-semibold">
        {typingMessage}
      </Text>

      <Pressable className="active:opacity-70" onPress={handlePress}>
        <Text className="p-5 m-5 rounded-lg border border-amber-700 text-center font-semibold">
          Button
        </Text>
      </Pressable>

      <Text className="p-5 m-5 rounded-lg border border-amber-700 text-center font-semibold">
        {clickMessage}
      </Text>
    </View>
  );
}

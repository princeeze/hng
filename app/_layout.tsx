import { Link } from "expo-router";
import { View, Text, Button, Alert } from "react-native";
import tw from "twrnc";

export default function RootLayout() {
  return (
    <View style={tw`justify-center items-center gap-8 w-full h-full`}>
      <Text style={tw`text-2xl`}>HNG Task 0</Text>
      <Link
        style={tw`p-4 text-white bg-blue-500 rounded`}
        href="https://github.com/princeeze/hng"
      >
        Open Repo
      </Link>
    </View>
  );
}

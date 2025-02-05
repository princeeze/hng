import { Link } from "expo-router";
import { View, Text, Button, Alert } from "react-native";
import tw from "twrnc";

export default function RootLayout() {
  return (
    <View style={tw`justify-center items-center gap-8 w-full h-full`}>
      <Text style={tw`text-2xl`}>HNG Task 0</Text>
      <View style={tw` flex-row gap-4 w-full px-4`}>
        <View style={tw`p-4 justify-center items-center bg-blue-500 rounded`}>
          <Link
            style={tw`text-white hover:bg-opaci`}
            href="https://github.com/princeeze/hng"
          >
            Open Repo
          </Link>
        </View>
        <Link
          style={tw`p-4 text-white bg-blue-500 rounded text-center flex-1`}
          href="https://hng.tech/hire/react-native-developers"
        >
          React Native Developers
        </Link>
      </View>
    </View>
  );
}

import React from "react";
import { Stack } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} className="mt-4 ml-4">
            <Image
              source={{
                uri: "https://i.pravatar.cc/300",
              }}
              className="w-12 h-12 rounded-full "
            />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <TouchableOpacity onPress={() => {}} className="mt-4 mr-4 ">
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

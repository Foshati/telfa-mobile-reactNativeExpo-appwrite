import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function index() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-blue-600">index</Text>
      <Text className="text-blue-600">index</Text>
      <Text className="text-blue-600">index</Text>
      <Text className="text-blue-600">index</Text>
      <Text className="text-blue-600">index</Text>
      <Text className="text-blue-600">index</Text>
      <Ionicons name="logo-instagram" size={24} color="black" />
      <Link href="/profile">go to profile</Link>
    </View>
  );
}

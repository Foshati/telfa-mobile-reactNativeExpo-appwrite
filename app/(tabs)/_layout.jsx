import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome6,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
// import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color, size }) => (
            // <View className="p-4 bg-red-500 rounded-lg">
            <FontAwesome6 name="circle-plus" size={24} color={color} /> // </View>
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// { color, size }  ؟  tabBarIcon  => API Tabs

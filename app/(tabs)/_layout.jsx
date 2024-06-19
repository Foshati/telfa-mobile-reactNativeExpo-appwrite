import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
// import { View } from "react-native";

export default function _layout() {
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
            <MaterialIcons name="home" size={size} color={color} />
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
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            // <View className="p-4 bg-red-500 rounded-lg">
            <Ionicons name="search-outline" size={size} color={color} />
            // </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}


// { color, size }  ؟  tabBarIcon  => API Tabs
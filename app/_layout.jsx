import { Stack } from "expo-router";
import "./global.css";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

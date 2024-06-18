import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        go to profile
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

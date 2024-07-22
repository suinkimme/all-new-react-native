import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Config from "react-native-config";

export default function App() {
  useEffect(() => {
    console.log(Platform.OS, Config.VERSION);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{Config.VERSION}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

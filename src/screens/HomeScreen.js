import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background_one.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.text}>Campus Events!!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#00aaff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white", // ensures text is visible on darker images
    position: "absolute",
    top: 80,
    alignSelf: "center",
  },
});

export default HomeScreen;

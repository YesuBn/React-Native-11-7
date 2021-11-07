import React from "react";
import Navbar from "../components/Navbar";
import Post1 from "../components/Post1";
import Post2 from "../components/Post2";
import { View } from "react-native";
export default function () {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <Post1 />
      <Post2 />
    </View>
  );
}

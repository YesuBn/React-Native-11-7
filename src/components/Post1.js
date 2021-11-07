import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function (props) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.box1}>
        <TouchableOpacity>
          <Image
            style={styles.postImage1}
            source={require("../../assets/Anudari_1.png")}
          />
          <View style={styles.postTitleWrapper}>
            <Text style={styles.postTitle1}>
              А.АНУДАРЬ: Шинэ Монгол технологийн дээд сургуулийн төгсөгчдийг аль
              ч компани маш дуртай, нааштайгаар хүлээж авдаг
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box1: {
    width: "90%",
    height: "65%",
    backgroundColor: "#773537",
    borderRadius: 25,
    bottom: 140,
  },
  postImage1: {
    width: 324,
    height: 250,
    borderRadius: 25,
  },
  postTitleWrapper: {
    bottom: 45,
    width: "100%",
    height: "25%",
    backgroundColor: "#773537",
    borderRadius: 25,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  postTitle1: {
    color: "white",
    opacity: 1,
    marginBottom: 10,
  },
});

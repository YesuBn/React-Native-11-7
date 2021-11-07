import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function () {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.box1}>
          <View>
            <Image
              style={styles.postImage1}
              source={require("../../assets/Enkhsaikhan_2.png")}
            />
            <View style={styles.postTitleWrapper}>
              <Text style={styles.postTitle1}>
                Б.ЭНХСАЙХАН: Дэлхийд архитектураараа хоёрт жагсдаг “NIKKEN
                SEKKEI consulting” компанид ажиллаж чадсан
              </Text>
            </View>
          </View>
        </View>
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
    bottom: 240,
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
  },
});

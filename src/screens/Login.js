import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
export default function (props) {
  return (
    <View style={styles.container}>
      <View style={styles.bubbleOne}></View>
      <View style={styles.bubbleTwo}></View>
      <View style={styles.bubbleThree}></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 210,
            width: 320,
            bottom: 150,
          }}
          source={require("../../assets/ШМТДС-Лого(Transparent).png")}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          marginHorizontal: 30,
          paddingBottom: 100,
        }}
      >
        <Text
          style={{ fontSize: 25, right: 92, bottom: 10, fontWeight: "bold" }}
        >
          ~Нэр~
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Та нэвтрэх нэрээ оруулна уу..."
        ></TextInput>
      </View>
      <Text style={{ fontSize: 25, left: 40, bottom: 10, fontWeight: "bold" }}>
        ~Утас~
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Та утасны дугаараа оруулна уу..."
        ></TextInput>
        <View style={{ top: 20 }}>
          <Button
            title="НЭВТРЭХ"
            onPress={() => props.navigation.navigate("NewsFeed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  homePageText: {
    left: 50,
    fontSize: 25,
    bottom: 95,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    width: 300,
    borderRadius: 15,
  },
  bubbleOne: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    top: -25,
    left: 120,
  },
  bubbleTwo: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.3,
    bottom: -50,
    right: 120,
  },
  bubbleThree: {
    position: "absolute",
    height: 250,
    width: 250,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    bottom: -100,
    right: -20,
  },
});

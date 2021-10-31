import React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default function App() {
  const buttonClickHandler = () => {
    Alert.alert("Сайн байна уу?");
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 190,
            width: 300,
            marginBottom: 70,
            // backgroundColor: "#A52A2A",
          }}
          source={require("./assets/ШМТДС-Лого(Transparent).png")}
        />
      </View>
      <View style={styles.buttons}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            borderColor: "gray",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 21, paddingBottom: 10 }}>~Оюутан~</Text>
          <Button title="Нэвтрэх" onPress={buttonClickHandler} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 15,
            borderColor: "gray",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 21, paddingBottom: 10 }}>~Админ~</Text>
          <Button title="Нэвтрэх" onPress={buttonClickHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    marginBottom: 50,
    fontSize: 40,
  },
  buttons: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 10,
  },
});

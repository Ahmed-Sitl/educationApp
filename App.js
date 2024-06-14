import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Colors from "./App/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View>
      <StatusBar hidden={true} />
      <Image
        source={require("./App/Assets/Images/login.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to CodeBox</Text>
        <Text style={styles.login}>Login & Signup</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            style={{ marginRight: 10 }}
            name="logo-google"
            size={24}
            color="white"
          />
          <Text style={{ color: "#fff" }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "45%",
    // marginTop: 35,
    // resizeMode: "conver",
  },
  container: {
    paddingTop: 35,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  login: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    // paddingTop: 40,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
});

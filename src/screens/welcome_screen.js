import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "../../assets/logo.png";

const _devicewidth = Dimensions.get("screen").width;
const _deviceheight = Dimensions.get("screen").height;

function welcome_screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles._logoImg} />
      <Text style={styles._title}>Welcome to the NarpsUK App!</Text>
      <View style={styles._bodycontainer}>
        <Text style={styles._welcometext}>
          The NarpsUK app has been designed exclusively for pet sitters and dog
          walkers who want to manage their business through their Smartphone.
        </Text>
        <Text style={styles._welcometext}>
          This app is a benefit for those who run a pet sitting or dog walking
          business because it reduces the amount of paperwork that you manage.
        </Text>
        <View style={styles._bottoncontainer}>
          <TouchableOpacity
            style={styles._btn}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles._btntext}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._btn2}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles._btntext}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default welcome_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006E90",
    alignItems: "center",
    justifyContent: "center",
  },
  _logoImg: {
    width: 131.04,
    height: 188.38,
  },
  _title: {
    fontSize: 25,
    marginVertical: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  _bodycontainer: {
    marginTop: 30,
    flex: 0.6,
    width: _devicewidth - 25,
    backgroundColor: "#99C24D",
    borderRadius: 25,
    padding: 25,
  },
  _welcometext: {
    fontSize: 17,
    textAlign: "justify",
    marginVertical: 5,
  },
  _bottoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    marginVertical: 20,
  },
  _btn: {
    marginHorizontal: 20,
    backgroundColor: "#F18F01",
    width: 148,
    height: 43,
    borderRadius: 10,
    justifyContent: "center",
  },
  _btn2: {
    marginHorizontal: 20,
    backgroundColor: "#ADCAD6",
    width: 148,
    height: 43,
    borderRadius: 10,
    justifyContent: "center",
  },
  _btntext: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

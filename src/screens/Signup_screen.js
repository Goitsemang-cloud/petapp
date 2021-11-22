import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import Logo from "../../assets/logo.png";

const _devicewidth = Dimensions.get("screen").width;
const _deviceheight = Dimensions.get("screen").height;

function Signup_screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles._logoImg} />
      <Text style={styles._title}>Sign up</Text>
      <View style={styles._bodycontainer}>
        <View style={styles._inputcontainer}>
          <FontAwesome
            style={styles._icon}
            name="user"
            size={30}
            color="gray"
          />
          <TextInput
            style={styles._textinput}
            placeholder="username"
            maxLength={25}
          />
        </View>

        <View style={styles._inputcontainer}>
          <Entypo style={styles._icon} name="mail" size={25} color="gray" />
          <TextInput
            style={styles._textinput}
            placeholder="Email"
            maxLength={40}
          />
        </View>

        <View style={styles._inputcontainer}>
          <Entypo style={styles._icon} name="lock" size={25} color="gray" />
          <TextInput
            style={styles._textinput}
            placeholder="password"
            secureTextEntry={true}
            maxLength={8}
          />
        </View>
        <TouchableOpacity
          style={styles._btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles._btntext}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles._textforlogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles._textlogin}>
            Already have an Account ?
            <Text style={{ color: "#006E90" }}> login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006E90",
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
    /*  flex: 0.8, */
    width: _devicewidth - 25,
    backgroundColor: "#99C24D",
    borderRadius: 25,
    padding: 25,
  },
  _inputcontainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginVertical: 10,
  },
  _textinput: {
    marginHorizontal: 10,
    borderLeftWidth: 2,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  _icon: {
    backgroundColor: "#ADCAD6",
    paddingHorizontal: 5,
  },
  _btn: {
    marginTop: 10,
    backgroundColor: "#F18F01",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  _btntext: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  _textforlogin: {
    marginTop: 25,
  },
  _textlogin: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";

const _devicewidth = Dimensions.get("screen").width;
const _deviceheight = Dimensions.get("screen").height;

//images
import Dog from "../../assets/Dog.jpg";
import Pen from "../../assets/icons/pen.png";
import transform from "../../assets/icons/transform.png";
import pet from "../../assets/icons/pet.png";
import heart from "../../assets/icons/heart.png";
import user from "../../assets/icons/user.png";
import edit from "../../assets/icons/edit.png";
import Call from "../../assets/icons/Call.png";

function Pet() {
  return (
    <ScrollView style={styles._container}>
      <View style={styles._avatarContainer}>
        <TouchableOpacity style={styles._editbtn}>
          <Text style={styles._textbtn}>Edit</Text>
          <Image source={Pen} style={styles._icon} />
        </TouchableOpacity>

        <View style={styles._imgContainer}>
          <Image source={Dog} style={styles._img} />
        </View>

        <TouchableOpacity style={styles._uploadbtn}>
          <Image source={transform} style={styles._icon} />
        </TouchableOpacity>
      </View>

      <View style={styles._inputcontainer}>
        <Image source={pet} style={styles._icon} />
        <TextInput
          style={styles._textinput}
          placeholder="Pet Name"
          maxLength={40}
        />
      </View>

      <View style={styles._inputcontainer}>
        <Image source={heart} style={styles._icon} />
        <TextInput
          style={styles._textinput}
          placeholder="Breed"
          maxLength={40}
        />
      </View>

      <View style={styles._inputcontainer}>
        <Image source={user} style={styles._icon} />
        <TextInput
          style={styles._textinput}
          placeholder="Owner"
          maxLength={40}
        />
      </View>

      <View style={styles._inputcontainer}>
        <Image source={edit} style={styles._icon} />
        <TextInput
          style={styles._textinput}
          placeholder="Vat number"
          maxLength={40}
        />
      </View>

      <View style={styles._inputcontainer}>
        <Image source={Call} style={styles._icon} />
        <TextInput
          style={styles._textinput}
          placeholder="Emergency Number"
          maxLength={40}
        />
      </View>
    </ScrollView>
  );
}

export default Pet;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#006E90",
  },
  _imgContainer: {
    alignItems: "center",
  },
  _img: {
    width: 225,
    height: 227,
    borderRadius: 150,
  },
  _editbtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginHorizontal: 60,
    marginBottom: -20,
  },
  _icon: {
    width: 26,
    height: 26,
  },
  _textbtn: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  _uploadbtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -30,
    marginHorizontal: 80,
    marginBottom: 20,
  },
  _inputcontainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    width: _devicewidth - 50,
    height: 46,
    alignSelf: "center",
    marginVertical: 5,
  },
  _textinput: {
    marginHorizontal: 10,
    borderLeftWidth: 2,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

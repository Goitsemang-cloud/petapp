import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

function Schedule() {
  return (
    <ScrollView style={styles._container}>
      <Text style={styles._title}>Title*</Text>
      <View style={styles._textInputContainer}>
        <TextInput
          style={styles._textInput}
          placeholder="Pet sitting\ pet walking"
        />
      </View>

      <Text style={styles._title}>Date*</Text>
      <View style={styles._textInputContainer}>
        <TextInput style={styles._textInput} placeholder="25/05/2021" />
      </View>

      <Text style={styles._title}>Pet Name*</Text>
      <View style={styles._textInputContainer}>
        <TextInput style={styles._textInput} placeholder="Rex" />
      </View>

      <Text style={styles._title}>Address/Location*</Text>
      <View style={styles._textInputContainer}>
        <TextInput
          style={styles._textInput}
          placeholder="Times Square, Simmonds Street, Johannesburg "
        />
      </View>

      <Text style={styles._title}>Notes*</Text>
      <View style={styles._textInputComment}>
        <TextInput style={styles._textInput} multiline={true} />
      </View>

      <TouchableOpacity style={styles._btn}>
        <Text style={styles._textBook}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Schedule;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#006E90",
  },
  _title: {
    fontSize: 25,
    marginHorizontal: 30,
    marginTop: 10,
  },
  _textInputContainer: {
    backgroundColor: "#C4C4C4",
    width: 355,
    height: 46,
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  _textInput: {
    fontSize: 16,
  },
  _textInputComment: {
    backgroundColor: "#C4C4C4",
    width: 355,
    height: 110,
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  _btn: {
    width: 355,
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F18F01",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 15,
  },
  _textBook: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

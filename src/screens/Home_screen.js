import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Bell from "../../assets/icons/bell.png";
import location from "../../assets/icons/location.png";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native-paper";

const _deviceWidth = Dimensions.get("screen").width;

function Home_screen() {
  const [region, setRegion] = useState({});
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let region = await Location.getLastKnownPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setRegion({
        latitude: region.coords.latitude,
        longitude: region.coords.longitude,
        latitudeDelta: 0.055,
        longitudeDelta: 0.055,
      });
    })();
  }, []);

  return (
    <View style={styles._container}>
      <View style={styles._titleContainer}>
        <Image source={Bell} style={styles._icon} />
        <Text style={styles._title}>Count down</Text>
      </View>
      <View style={styles._countDownContainer}>
        <View style={styles._textcontainer}>
          <Text style={styles._textcounter}>00</Text>
          <Text>hours</Text>
        </View>

        <Text style={styles._counterseparators}>:</Text>

        <View style={styles._textcontainer}>
          <Text style={styles._textcounter}>48</Text>
          <Text>Minutes</Text>
        </View>

        <Text style={styles._counterseparators}>:</Text>

        <View style={styles._textcontainer}>
          <Text style={styles._textcounter}>35</Text>
          <Text>Seconds</Text>
        </View>
      </View>

      <View style={styles._mapContainer}>
        <View style={styles._titlemap}>
          <Image source={location} style={styles._icon} />
          <Text style={styles._title}>Live location</Text>
        </View>
        {Object.keys(region).length > 0 ? (
          <MapView
            style={styles._map}
            showsUserLocation={true}
            followUserLocation={true}
            initialRegion={region}
          />
        ) : (
          <ActivityIndicator size="large" color="black" style={styles._map} />
        )}
      </View>
    </View>
  );
}

export default Home_screen;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#006E90",
  },
  _title: {
    fontSize: 25,
    fontWeight: "900",
  },
  _titleContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
  },
  _titlemap: {
    flexDirection: "row",
    marginTop: -30,
    marginHorizontal: 20,
  },
  _icon: {
    width: 25,
    height: 29,
    marginHorizontal: 10,
  },
  _countDownContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#99C24D",
    width: _deviceWidth - 50,
    borderRadius: 10,
    flexDirection: "row",
  },
  _textcounter: {
    fontSize: 80,
  },
  _counterseparators: {
    fontSize: 80,
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    top: -10,
  },
  _mapContainer: {
    justifyContent: "center",
  },
  _map: {
    marginTop: 10,
    width: _deviceWidth - 50,
    height: "75%",
    alignSelf: "center",
  },
  _textcontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

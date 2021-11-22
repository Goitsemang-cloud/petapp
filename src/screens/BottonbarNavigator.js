import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeLogo from "../../assets/icons/Home.png";
import ScheduleLogo from "../../assets/icons/Schedule.png";
import petLogo from "../../assets/icons/pet.png";
import userLogo from "../../assets/icons/user.png";

//screens
import {
  HomeScreen,
  ScheduleScreen,
  PetScreen,
  ProfileScreen,
} from "./Custome_screenNavigator";

const Tab = createMaterialBottomTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

function BottonbarNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="#3e2465"
      labeled={true}
      barStyle={{
        backgroundColor: "#ADCAD6",
      }}
    >
      <Tab.Screen
        name="main"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image source={HomeLogo} style={{ width: 26, height: 26 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule main"
        component={ScheduleScreen}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color }) => (
            <Image source={ScheduleLogo} style={{ width: 26, height: 26 }} />
          ),
        }}
      />
      <Tab.Screen
        name="pet"
        component={PetScreen}
        options={{
          tabBarLabel: "pet",
          tabBarIcon: ({ color }) => (
            <Image source={petLogo} style={{ width: 26, height: 26 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image source={userLogo} style={{ width: 26, height: 26 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottonbarNavigator;

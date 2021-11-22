import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home_screen from "./Home_screen";
import Schedule from "./Schedule";
import Pet from "./pet";
import Profile from "./Profile";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home screen"
        component={Home_screen}
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#ADCAD6" },
          headerTitleStyle: { color: "white" },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

const ScheduleScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          /*  title: "Schedule", */
          headerStyle: { backgroundColor: "#ADCAD6" },
          headerTitleStyle: { color: "white" },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

const PetScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pet Information"
        component={Pet}
        options={{
          /*  title: "Schedule", */
          headerStyle: { backgroundColor: "#ADCAD6" },
          headerTitleStyle: { color: "white" },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Information"
        component={Profile}
        options={{
          /*  title: "Schedule", */
          headerStyle: { backgroundColor: "#ADCAD6" },
          headerTitleStyle: { color: "white" },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeScreen, ScheduleScreen, PetScreen, ProfileScreen };

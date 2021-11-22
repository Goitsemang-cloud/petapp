import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottonbarNavigator from "./src/screens/BottonbarNavigator";
import Signin_screeen from "./src/screens/Signin_screen";
import Signup_screen from "./src/screens/Signup_screen";
import Welcome_screen from "./src/screens/welcome_screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome_screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Signin_screeen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Signup_screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottonbarNavigator}
            options={{ headerShown: false, headerLeft: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

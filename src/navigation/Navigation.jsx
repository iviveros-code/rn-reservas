import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackScreen from "./stacks/HomeStackScreen";
import WodStackScreen from "./stacks/WodStackScreen";
import ReservasStackScreen from "./stacks/ReservasStackScreen";
import LoginStackScreen from "./stacks//login/LoginStackScreen";
import SignInStackScreen from "./stacks/login/SignInStackScreen";
import SignUpStackScreen from "./stacks/login/SignUpStackScreen";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";

import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Reservas" component={ReservasStackScreen} />
        <Drawer.Screen name="Wod" component={WodStackScreen} />
        <Drawer.Screen
          name="Login"
          component={LoginStackScreen}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen
          name="Sign-in"
          component={SignInStackScreen}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen
          name="Sign-up"
          component={SignUpStackScreen}
          options={{ gestureEnabled: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

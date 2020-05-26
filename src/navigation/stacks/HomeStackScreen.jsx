import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222831",
        },
        headerTintColor: "#e0ff00",
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#222831"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import WodScreen from "../screens/WodScreen";

const WodStack = createStackNavigator();

const WodStackScreen = ({ navigation }) => {
  return (
    <WodStack.Navigator
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
      <WodStack.Screen
        name="Workout of day 🏋️‍♀️"
        component={WodScreen}
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
    </WodStack.Navigator>
  );
};
export default WodStackScreen;

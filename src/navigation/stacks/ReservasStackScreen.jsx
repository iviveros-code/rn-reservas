import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import ReservasScreen from "../screens/ReservasScreen";

const ReservasStack = createStackNavigator();

const ReservasStackScreen = ({ navigation }) => {
  return (
    <ReservasStack.Navigator
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
      <ReservasStack.Screen
        name="Reservas"
        component={ReservasScreen}
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
    </ReservasStack.Navigator>
  );
};
export default ReservasStackScreen;

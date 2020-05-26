import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "../../screens/login/LoginScreen";

const LoginStack = createStackNavigator();

const LoginStackScreen = ({ navigation }) => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};
export default LoginStackScreen;

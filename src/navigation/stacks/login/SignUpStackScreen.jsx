import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../../screens/login/SignUpScreen";

const SignUpStack = createStackNavigator();

const SignUpStackScreen = ({ navigation }) => {
  return (
    <SignUpStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SignUpStack.Screen name="Sign-Up" component={SignUpScreen} />
    </SignUpStack.Navigator>
  );
};
export default SignUpStackScreen;

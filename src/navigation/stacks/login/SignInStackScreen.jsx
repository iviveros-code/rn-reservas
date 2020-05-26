import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../screens/login/SignInScreen";

const SignInStack = createStackNavigator();

const SignInStackScreen = ({ navigation }) => {
  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SignInStack.Screen name="Sign-In" component={SignInScreen} />
    </SignInStack.Navigator>
  );
};
export default SignInStackScreen;

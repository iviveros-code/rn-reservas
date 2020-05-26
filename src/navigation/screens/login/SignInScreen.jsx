import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignInComponent from "../../../components/login/SignInComponent";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignInComponent navigation={navigation} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

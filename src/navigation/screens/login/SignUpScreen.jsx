import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignUpComponent from "../../../components/login/SignUpComponent";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignUpComponent navigation={navigation} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

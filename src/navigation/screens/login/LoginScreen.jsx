import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginComponent from "../../../components/login/LoginComponent";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginComponent navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

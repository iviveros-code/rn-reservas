import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase/app";

export default function NombreUsuario() {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const name = async () => {
      try {
        const user = await firebase.auth().currentUser.email;
        setUserInfo(user);
      } catch (error) {
        console.log(error);
      }
    };
    name();
  }, []);

  return (
    <View>
      <Text>{userInfo} </Text>
    </View>
  );
}

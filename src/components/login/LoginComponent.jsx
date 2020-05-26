import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as firebase from "firebase";

const LoginComponent = (props) => {
  const { navigation } = props;

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (firebase.auth().currentUser) {
      console.log("existe usuario");
      setUser(firebase.auth().currentUser);
    } else {
      console.log("no existe usuario");
      navigation.navigate("Login");
    }
  }, [navigation.navigate]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../../../assets/fondo2.png")}
          style={styles.logo}
          resizeMode={"stretch"}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Reserva un turno para entrenar!</Text>
        <Text style={styles.text}> Ingresa con tu cuenta</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign-in")}
            style={styles.signIn}
          >
            <Text style={styles.textSignIn}>Iniciar Sesión</Text>
            <MaterialIcons name="navigate-next" color="black" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign-up")}
            style={[(style = styles.signIn), { marginTop: 10 }]}
          >
            <Text style={styles.textSignIn}>Registrarse</Text>
            <MaterialIcons name="navigate-next" color="black" size={20} />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#e0ff00",
  },
  textSignIn: {
    color: "black",
  },
});

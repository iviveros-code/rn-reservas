import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import * as firebase from "firebase";
import firebaseApp from "../../utils/Firebase";
import Loading from "../../components/Loading";

const SignInComponent = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const validacionDatos = () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
    } else {
      iniciarSesion();
    }
  };

  const iniciarSesion = useCallback(async () => {
    setIsVisibleLoading(true);
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(res.user);
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      if ([Error === "The email address is badly formatted."]) {
        setError("Email inválido");
      }
      if (
        [
          Error ===
            "There is no user record corresponding to this identifier. The user may have been deleted.",
        ]
      ) {
        setError("No existe el usuario, por favor registrarse");
      }
      if (
        [
          Error ===
            "The password is invalid or the user does not have a password.",
        ]
      ) {
        setError("Contraseña inválida o vacía");
      }
      if (
        [
          Error ===
            "Too many unsuccessful login attempts. Please try again later.",
        ]
      ) {
        setError("Varios intentos fallidos, volver a intentar más tarde");
      }
    }
    setIsVisibleLoading(false);
  }, [email, password]);

  // "The password is invalid or the user does not have a password."
  //"There is no user record corresponding to this identifier. The user may have been deleted.",
  // "The email address is badly formatted."
  // "Too many unsuccessful login attempts. Please try again later."

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Bienvenid@!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>E-Mail</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#222831" size={20} />
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
          />
          <Feather
            name={email ? "check-circle" : null}
            color="#222831"
            size={20}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Contraseña</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#222831" size={20} />
          <TextInput
            placeholder="Your password"
            style={styles.textInput}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
            secureTextEntry={showPassword}
          />
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            color="#222831"
            size={20}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <Text style={{ color: "#009bd1", marginTop: 15 }}>
          Olvidaste tu contraseña?
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={validacionDatos}
            style={[
              styles.signIn,
              { backgroundColor: "#e0ff00", marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "black" }]}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Sign-up")}
            style={[
              styles.signIn,
              { backgroundColor: "#e0ff00", marginTop: 20 },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "black" }]}>
              Registrate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Facebook")}
            style={[
              styles.signIn,
              { backgroundColor: "#3b5998", marginTop: 20 },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "white" }]}>
              Iniciar Sesión con{" "}
              <Text style={{ fontWeight: "bold" }}>Facebook</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Loading isVisible={isVisibleLoading} text="Iniciando Sesión" />
        {error && (
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                backgroundColor: "#ff7675",
                width: "100%",
                height: 50,
                color: "#fff",
                textAlign: "center",
                padding: 15,
                borderWidth: 1,
              }}
            >
              {error}
            </Text>
          </View>
        )}
      </Animatable.View>
    </View>
  );
};
export default SignInComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#222831",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 15,
  },
});

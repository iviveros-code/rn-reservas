import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";
import firebaseApp from "../../utils/Firebase";
const db = firebase.firestore(firebaseApp);
import Loading from "../../components/Loading";

const SignUpComponent = (props) => {
  const { navigation } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPss, setConfirmPss] = useState("");
  const [error, setError] = useState(null);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [repeatPass, setRepeatPass] = useState("");

  const validacionDatos = () => {
    if (!name || !email || !password || !confirmPss) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!validateEmail(email)) {
      setError("Debes escribir un email válido");
      return;
    }
    if (password.length < 6) {
      setError(" La contraseña debe ser mayor a 6 caracteres");
      return;
    }
    if (password !== confirmPss) {
      setError("Las contraseñas deben ser iguales ");
      return;
    } else {
      setError("Formulario completo correctamente!");
      registro();
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPss("");
      setError(null);
      return;
    }
  };

  const registro = useCallback(async () => {
    setIsVisibleLoading(true);
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await db.collection("usuarios").doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid,
      });

      await navigation.navigate("Home");
      console.log(res);
    } catch (error) {
      console.log(error);
      if (
        [Error === "The email address is already in use by another account"]
      ) {
        setError("El email ya se encuentra registrado");
      }
      if ([Error === "The email address is badly formatted"]) {
        setError("El email tiene un formato inválido");
      }
    }
    setIsVisibleLoading(false);
  }, [email, password, navigation.navigate]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Regístrate para poder reservar un turno antes de ir al Box!
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Nombre</Text>
        <View style={styles.action}>
          <FontAwesome name="id-card" color="#222831" size={20} />
          <TextInput
            placeholder="Ingresa tu nombre"
            style={styles.textInput}
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
          />
          <Feather name="check-circle" color="#222831" size={20} />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>E-Mail</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#222831" size={20} />
          <TextInput
            placeholder="Coloca tu email"
            style={styles.textInput}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
          />
          <Feather name="check-circle" color="#222831" size={20} />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Contraseña</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#222831" size={20} />
          <TextInput
            placeholder="Elige una contraseña mayor a 6 dígitos"
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
        <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Confirmar Contraseña
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#222831" size={20} />
          <TextInput
            placeholder="Reingresar contraseña"
            style={styles.textInput}
            onChange={(e) => setConfirmPss(e.nativeEvent.text)}
            value={confirmPss}
            secureTextEntry={repeatPass}
          />
          <Feather
            name={repeatPass ? "eye-off" : "eye"}
            color="#222831"
            size={20}
            onPress={() => setRepeatPass(!repeatPass)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={validacionDatos}
            style={[
              styles.signIn,
              { backgroundColor: "#e0ff00", marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "black" }]}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Feather
            name="arrow-left"
            color="#222831"
            size={20}
            style={{ marginTop: 40 }}
            onPress={() => navigation.navigate("Sign-in")}
          />
          <Text style={{ color: "#c2c2c2" }}>Volver</Text>
        </View>

        <Loading isVisible={isVisibleLoading} text="Registrando" />
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
export default SignUpComponent;

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
    fontSize: 20,
  },
  text_footer: {
    color: "#05375a",
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

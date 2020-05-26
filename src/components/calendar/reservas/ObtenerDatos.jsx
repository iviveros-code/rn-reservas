import React, { useEffect, useState } from "react";
import { View, Text, Alert, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
// import { firebaseApp } from "../../../utils/Firebase";
import "@firebase/firestore";
import * as firebase from "firebase/app";

import Icon from "react-native-vector-icons/FontAwesome";
import Moment from "moment";
import "moment/locale/es";

export const ObtenerDatos = () => {
  const [reservas, setReservas] = useState([]);

  //los corchetes son para que se ejecute solo una vez
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db
          .collection(firebase.auth().currentUser.uid)
          .orderBy("dia", "desc")
          .get();
        const arrayData = data.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setReservas(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, [reservas]);

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection(firebase.auth().currentUser.uid).doc(id).delete();

      const arrayFiltrado = reservas.filter((item) => item.id !== id);
      setReservas(arrayFiltrado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={{ textAlign: "center", backgroundColor: "#e0ff00" }}>
        Listado de Reservas
      </Text>
      {reservas.map((item, index) => {
        return (
          <ListItem
            key={index}
            title={" ✅ " + item.dia + "    -    " + item.horario}
            rightIcon={
              <Icon
                type="font-awesome"
                name="trash"
                size={25}
                color="#222831"
                onPress={() =>
                  Alert.alert(
                    "Anular Reserva",
                    "Segur@ deseas cancelar??",
                    [
                      { text: "OK", onPress: () => eliminar(item.id) },
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                    ],
                    { cancelable: false }
                  )
                }
              />
            }
          />
        );
      })}
    </View>
  );
};

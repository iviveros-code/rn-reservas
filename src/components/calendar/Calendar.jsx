import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import Moment from "moment";
import "moment/locale/es";
// import { firebaseApp } from "../../utils/Firebase";
// import "@firebase/firestore";
import * as firebase from "firebase/app";
import Loading from "../Loading";
import { useNavigation } from "@react-navigation/native";

const Calendar = () => {
  const navigation = useNavigation();

  const [selectDate, setSelectDate] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [horarios, setHorarios] = useState("");
  const [error, setError] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const weekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  const agregar = async () => {
    setIsVisibleLoading(true);
    if (!selectDate || !horarios) {
      setError("Elegir un día y un horario");
    } else {
      try {
        const db = firebase.firestore();
        const nuevaReserva = {
          dia: selectDate,
          horario: horarios,
        };
        const data = await db
          .collection(firebase.auth().currentUser.uid)
          .add(nuevaReserva);
        setReservas([...reservas, { ...nuevaReserva, id: data.id }]);
        setHorarios("");
        setSelectDate("");
        setError(null);
        navigation.navigate("Reservas");
      } catch (error) {
        console.log(error);
      }
    }
    setIsVisibleLoading(false);
  };

  return (
    <View style={styles.calendar}>
      <CalendarPicker
        onDateChange={(date) => setSelectDate(date.format(" DD MMMM YYYY"))}
        minDate={new Date()}
        textStyle={{ color: "#222831" }}
        months={months}
        weekdays={weekdays}
        previousTitle={"Anterior"}
        nextTitle={"Siguiente"}
        previousTitleStyle={{
          color: "#222831",
          backgroundColor: "#e0ff00",
          textAlign: "center",
        }}
        nextTitleStyle={{
          color: "#222831",
          backgroundColor: "#e0ff00",
          textAlign: "center",
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.daySelected}>
          Has seleccionado:{" "}
          <Text style={{ color: "tomato", fontWeight: "bold" }}>
            {selectDate}
          </Text>
        </Text>
      </View>

      <Text style={{ marginTop: 30, textAlign: "center" }}>
        2 - Seleccionar una clase{"   "}
      </Text>
      <View style={{ marginTop: 10 }}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => setHorarios("8:00 am")}>
                <Text style={styles.modalText}>8:00 am</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setHorarios("9:00 am")}>
                <Text style={styles.modalText}>9:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("10:00 am")}>
                <Text style={styles.modalText}>10:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("13:30 pm")}>
                <Text style={styles.modalText}>13:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("14:30 pm")}>
                <Text style={styles.modalText}>14:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("17:30 pm")}>
                <Text style={styles.modalText}>17:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("18:30 pm")}>
                <Text style={styles.modalText}>18:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("19:30 pm")}>
                <Text style={styles.modalText}>19:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHorarios("20:30 pm")}>
                <Text style={styles.modalText}>20:30 pm</Text>
              </TouchableOpacity>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#222831" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Ok !</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btnHorarios}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textHorario}>Horarios</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 30,
              textAlign: "center",
              color: "#222831",
            }}
          >
            {" "}
            Has elegido:{" "}
            <Text
              style={{
                color: "tomato",
                fontWeight: "bold",
              }}
            >
              {horarios} ⏱
            </Text>
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: "80%",
              borderWidth: 6,
              borderColor: "#e0ff00",
              borderRadius: 10,
              height: 50,
              marginTop: 30,
              justifyContent: "center",
            }}
            onPress={agregar}
          >
            <Text style={styles.textConfirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
        <Loading isVisible={isVisibleLoading} text="Enviando Reserva " />
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
                width: "80%",
                height: 50,
                color: "#fff",
                textAlign: "center",
                padding: 15,
                borderWidth: 1,
                marginTop: 90,
              }}
            >
              {error}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 20,
  },
  daySelected: {
    textAlign: "center",

    color: "#222831",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  textStyle: {
    color: "#e0ff00",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  btnHorarios: {
    backgroundColor: "#222831",
    marginTop: 20,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textHorario: {
    color: "#e0ff00",
    fontWeight: "bold",
    textAlign: "center",
  },
  textConfirmar: {
    color: "#222831",
    fontWeight: "bold",
    textAlign: "center",
  },
});

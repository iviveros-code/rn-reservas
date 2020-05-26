import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";

const HorariosBox = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [horarios, setHorarios] = useState("");

  return (
    <View style={styles.centeredView}>
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
            <Text style={{ marginBottom: 20 }}>Elegiste: {horarios} </Text>
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

      <TouchableHighlight
        style={styles.Horarios}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textHorario}>Horarios</Text>
      </TouchableHighlight>

      <Text style={{ marginTop: 20 }}>Elegiste</Text>
    </View>
  );
};

export default HorariosBox;

const styles = StyleSheet.create({
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
  Horarios: {
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
});

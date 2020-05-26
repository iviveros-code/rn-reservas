import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Calendar from "../../components/calendar/Calendar";
import NombreUsuario from "../../components/calendar/NombreUsuario";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nombreUsuario}>
        <Text>Hola! </Text>
        <NombreUsuario />
      </View>
      <Text style={{ marginTop: 20, textAlign: "center" }}>
        1 - Seleccionar el día que vas a entrenar{"   "}
      </Text>
      <Calendar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  nombreUsuario: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
  },
});

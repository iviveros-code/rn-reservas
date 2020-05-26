import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ObtenerDatos } from "../../components/calendar/reservas/ObtenerDatos";

const ReservasScreen = () => {
  return (
    <View style={styles.container}>
      <ObtenerDatos />
    </View>
  );
};

export default ReservasScreen;

const styles = StyleSheet.create({
  container: {},
});

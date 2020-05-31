import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RenderItem from "../../components/RenderItem";

import "@firebase/firestore";
import * as firebase from "firebase/app";

const WodScreen = () => {
  const [wods, setWods] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db
          .collection("wod")
          .orderBy("fecha", "desc")

          .get();
        const arrayData = data.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setWods(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, [wods]);

  return (
    <View style={styles.container}>
      <FlatList
        data={wods}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(index) => index.id}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default WodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 16, marginTop: 10 }}>
        Warm Up
      </Text>

      <FlatList
        data={wods}
        renderItem={({ item }) => <Item title={item.warmUp} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={{ textAlign: "center", fontSize: 16 }}>Midline</Text>

      <FlatList
        data={wods}
        renderItem={({ item }) => <Item title={item.midline} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ textAlign: "center", fontSize: 16 }}>Wod</Text>

      <FlatList
        data={wods}
        renderItem={({ item }) => <Item title={item.wod} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ textAlign: "center", fontSize: 16 }}>Estructura</Text>

      <FlatList
        data={wods}
        renderItem={({ item }) => <Item title={item.estructura} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default WodScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#c2c2c2",
    shadowOpacity: 1,
  },
  title: {
    fontSize: 18,
  },
});

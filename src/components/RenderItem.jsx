import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RenderItem = ({ item }) => {
  return (
    <View>
      <View>
        <Text style={styles.label}>Warm UP</Text>
        <Text style={styles.item}>{item.warmUp}</Text>
      </View>
      <View>
        <Text style={styles.label}>Midline</Text>
        <Text style={styles.item}>{item.midline}</Text>
      </View>
      <View>
        <Text style={styles.label}>Wod</Text>
        <Text style={styles.item}>{item.wod}</Text>
      </View>
      <View>
        <Text style={styles.label}>Estructura</Text>
        <Text style={styles.item}>{item.estructura}</Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#C5FFEB",

    margin: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#c2c2c2",
    shadowOpacity: 1,
  },
});

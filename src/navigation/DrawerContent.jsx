import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as firebase from "firebase/app";

export function DrawerContent(props) {
  const { navigation } = props;

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const name = async () => {
      try {
        const user = await firebase.auth().currentUser.email;
        setUserInfo(user);
      } catch (error) {
        console.log(error);
      }
    };
    name();
  }, [userInfo]);

  return (
    <View style={{ flex: 1, backgroundColor: "#222831" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", margin: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://api.adorable.io/avatars/285/abott@adorable.pngC",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{userInfo}</Title>
                <Caption style={styles.caption}>@Instagram</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.item}
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"#e0ff00"} size={size} />
              )}
              label={({ color }) => <Text style={{ color: "#fff" }}>Home</Text>}
              onPress={() => navigation.navigate("Home")}
              backgroundColor="tomato"
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar" color={"#e0ff00"} size={size} />
              )}
              label={({ color }) => (
                <Text style={{ color: "#fff" }}>Reservas</Text>
              )}
              onPress={() => navigation.navigate("Reservas")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="dumbbell" color={"#e0ff00"} size={size} />
              )}
              label={({ color }) => <Text style={{ color: "#fff" }}>Wod</Text>}
              onPress={() => {
                navigation.navigate("Wod");
              }}
            />
          </Drawer.Section>
          <Drawer.Section
            title={<Text style={{ color: "#fff" }}>Ajustes</Text>}
          >
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"#e0ff00"} size={size} />
              )}
              label={({ color }) => (
                <Text style={{ color: "#fff" }}>Perfil</Text>
              )}
              onPress={() => console.log("ir a Perfil")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={"#e0ff00"} size={size} />
              )}
              label={({ color }) => (
                <Text style={{ color: "#fff" }}>Configuración</Text>
              )}
              onPress={() => console.log("configuración")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"#e0ff00"} size={size} />
          )}
          label={({ color }) => (
            <Text style={{ color: "#fff" }}>Cerrar Sesión</Text>
          )}
          onPress={() => navigation.navigate("Login")}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#e0ff00",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#fff",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Platform,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import { Text } from "native-base";

const Profil = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.topTitle}>
          <Text style={styles.textContainer}>DISPENSER</Text>
          <Image
            source={require("../../assets/logo_dispenser-white.png")}
            style={{ width: 35, height: 35, top: "2%" }}
          />
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.roundbox}>
          <Image
            source={require("../../assets/user.png")}
            style={{ width: 95, height: 95, bottom: "3%" }}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={[styles.filed, { bottom: 20 }]}>
            <Image
              source={require("../../assets/notification_bell.png")}
              style={{ width: 16, height: 16, right: 65 }}
            />
            <Text style={styles.text}>Notifications</Text>
            <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}
              trackColor={{ false: "white", true: "black" }}
              style={{
                left: 55,
                transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              }}
            />
          </View>
          <View style={[styles.filed, { right: 23, top: 200}]}>
            <Image
              source={require("../../assets/logout.png")}
              style={{ width: 16, height: 16, right: 65 }}
            />
            <Text style={styles.text}>Déconnexion</Text>
          </View>
          <View style={[styles.filed, {left: 28, top: 220}]}>
            <Image
              source={require("../../assets/block.png")}
              style={{ width: 16, height: 16, right: 65 }}
            />
            <Text style={styles.text}>Désactiver mon compte</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 150,
  },
  topTitle: {
    position: "relative",
    backgroundColor: "black",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    color: "#FCFDFF",
    top: "2%",
    fontSize: 25,
    textAlign: "center",
    marginRight: 5,
    paddingRight: 5,
    fontFamily: Platform.OS === "ios" ? "American Typewriter" : "Roboto",
  },
  middle: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  roundbox: {
    backgroundColor: "white",
    width: 140,
    height: 140,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 40,
  },
  filed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    right: 45,
    fontFamily: "Helvetica Neue",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottom: {
    position: "relative",
    height: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 0,
  },
});

export default Profil;

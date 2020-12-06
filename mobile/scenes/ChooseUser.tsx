import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "native-base";
import { Platform } from "react-native";

import { Actions } from "react-native-router-flux";

class ChooseUser extends Component {
  
  onPressUser = (user: string) => {
    switch (user) {
      case "RL":
        Actions.push('signupRL');
        break;
      case "TS":
        Actions.push('signupTS');
        break;
      case "UL":
        Actions.push('signupUL');
        break;
      default:
        Actions.refresh("signup");
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.top}></View>

        <View style={styles.title}>
          <Text style={styles.textContainer}>Dispenser</Text>
          <Image
            source={require("../assets/logo_dispenser-white.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <View style={styles.middle}>
          <View style={styles.userArea}>
            <TouchableOpacity
              style={styles.userButtonMain}
              onPress={() => this.onPressUser("RL")}
            >
              <View style={styles.userButtonBg}>
                <Image
                  source={require("../assets/inventory.png")}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <Text style={styles.userText}>Responsable Logistique</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.userButtonMain, styles.userButtonBis]}
              onPress={() => this.onPressUser("TS")}
            >
              <View style={styles.userButtonBg}>
                <Image
                  source={require("../assets/wipe.png")}
                  style={{ width: 75, height: 75 }}
                />
              </View>
              <Text style={styles.userText}>Technicien de Surface</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.userButtonMain, styles.userButtonBis2]}
              onPress={() => this.onPressUser("UL")}
            >
              <View style={styles.userButtonBg}>
                <Image
                  source={require("../assets/soap.png")}
                  style={{ width: 65, height: 65 }}
                />
              </View>
              <Text style={styles.userText}>Utilisateur Lambda</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signinzBtns}>
            <Button
              style={[styles.otherBtn, { marginTop: 10 }]}
              onPress={() => Actions.replace("auth")}
            >
              <Text style={{ color: "#000000" }}>Sign In</Text>
            </Button>
            <View style={{ margin: 10 }}></View>
            <Button style={styles.plusSizeBtn}>
              <Text style={{ color: "#000000", fontSize: 29 }}>Sign Up</Text>
            </Button>
          </View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

export default ChooseUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 500,
  },
  middle: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    zIndex: 2,
    backgroundColor: "transparent",
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: "relative",
    height: "100%",
    paddingRight: 26.3,
    paddingLeft: 26.3,
    backgroundColor: "#FFFFFF",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: 0,
    top: "15%",
  },
  textContainer: {
    color: "#FCFDFF",
    fontSize: 45,
    position: "relative",
    paddingRight: 15,
    fontFamily: Platform.OS === "ios" ? "American Typewriter" : "Roboto",
  },
  userArea: {
    height: 300,
    top: "30%",
  },
  userButtonMain: {
    width: "40%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  userButtonBg: {
    backgroundColor: "white",
    alignItems: "center",
    width: "65%",
    height: "65%",
    justifyContent: "center",
    borderRadius: 15,
  },
  userText: {
    color: "white",
    top: "5%",
    textAlign: "center",
  },
  userButtonBis: {
    bottom: "40%",
    left: "60%",
  },
  userButtonBis2: {
    alignSelf: "center",
    bottom: "30%",
    width: "40%",
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: "#2D3057",
    width: "90%",
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  signinzBtns: {
    flexDirection: "row",
    top: "78%",
    justifyContent: "center",
  },
  plusSizeBtn: {
    height: 55,
    width: 125,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  otherBtn: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
});

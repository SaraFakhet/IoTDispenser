import React from "react";
import * as Font from "expo-font";
import { Actions, Router, Scene, Tabs } from "react-native-router-flux";

import LaunchingScreen from "./scenes/LaunchingScreen";
import AuthScene from "./scenes/AuthScene";
import ChooseUser from "./scenes/ChooseUser";
import SignUpTS from "./scenes/CleanTechUser/SignUpTS";
import SignUpRL from "./scenes/RespoLogUser/SignUpRL";
import SignUpUL from "./scenes/LambdaUser/SignUpUL";
import LambdaHome from "./scenes/LambdaUser/Home";
import Prevention from "./scenes/LambdaUser/Prevention";
import Profil from "./scenes/LambdaUser/Profil";
import HomeTS from "./scenes/CleanTechUser/Home";
import HomeRL from "./scenes/RespoLogUser/Home";
import CleanTeam from './scenes/RespoLogUser/CleanTeam';
import { View, Text, StyleSheet, Image } from "react-native";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const TabIcon = (props: any) => {
  let textColor = props.focused ? "#000" : "darkgrey";
  let borderColor = props.focused ? "#000" : "transparent";
  var settingImage;
  switch (props.title) {
    case "Accueil":
      settingImage = require("./assets/bar-chart.png");
      break;
    case "Info Prévention":
      settingImage = require("./assets/medical-report.png");
      break;
    case "Profil":
      settingImage = require("./assets/user.png");
      break;
    case "Déconnexion":
      settingImage = require("./assets/logoutTab.png");
      break;
    case "Équipe Nettoyage":
      settingImage = require("./assets/medical-report.png");
      break
    default:
      break;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: borderColor,
        borderTopWidth: 1,
        width: 90,
      }}
    >
      <Image source={settingImage} style={{ width: 25, height: 25 }} />
      <Text
        style={{
          color: textColor,
          fontSize: 10,
          textAlign: "center",
          paddingTop: 2,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

class App extends React.Component {
  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Arial: require("./assets/fonts/Arial.ttf"),
      "Helvetica Neue": require("./assets/fonts/HelveticaNeue.ttf"),
      "American Typewriter": require("./assets/fonts/AmericanTypewriter.ttf"),
    });
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="loading"
            component={LaunchingScreen}
            initial
            hideNavBar
          ></Scene>
          <Scene key="auth" component={AuthScene} hideNavBar></Scene>
          <Scene key="signup" component={ChooseUser} hideNavBar></Scene>
          <Scene
            key="signupRL"
            component={SignUpRL}
            title="Inscription"
          ></Scene>
          <Scene
            key="signupUL"
            component={SignUpUL}
            title="Inscription"
          ></Scene>
          <Scene
            key="signupTS"
            component={SignUpTS}
            title="Inscription"
          ></Scene>
          <Tabs key="roothome" hideNavBar tabs showLabel={false}>
            <Scene
              key="homeUL"
              wrap={false}
              component={LambdaHome}
              hideNavBar
              icon={TabIcon}
              title="Accueil"
              initial
            ></Scene>
            <Scene
              key="infoUL"
              component={Prevention}
              hideNavBar
              icon={TabIcon}
              title="Info Prévention"
            ></Scene>
            <Scene
              key="profilUL"
              component={Profil}
              hideNavBar
              icon={TabIcon}
              title="Profil"
            ></Scene>
          </Tabs>
          <Tabs key="rootTS" hideNavBar showLabel={false}>
            <Scene
              key="homeTS"
              wrap={false}
              component={HomeTS}
              hideNavBar
              icon={TabIcon}
              title="Accueil"
              initial
            ></Scene>
            <Scene
              key="deco"
              wrap={false}
              hideNavBar
              icon={TabIcon}
              component={HomeTS}
              tabBarOnPress={() => Actions.push("auth")}
              title="Déconnexion"
            ></Scene>
          </Tabs>
          <Tabs key="rootRL" hideNavBar showLabel={false}>
            <Scene
              key="homeRL"
              wrap={false}
              component={HomeRL}
              hideNavBar
              icon={TabIcon}
              title="Accueil"
              initial
            ></Scene>
            <Scene
              key="cleanTeam"
              wrap={false}
              component={CleanTeam}
              hideNavBar
              icon={TabIcon}
              title="Équipe Nettoyage"
              initial
            ></Scene>
            <Scene
              key="deco"
              wrap={false}
              hideNavBar
              icon={TabIcon}
              component={HomeRL}
              tabBarOnPress={() => Actions.push("auth")}
              title="Déconnexion"
            ></Scene>
          </Tabs>
        </Scene>
      </Router>
    );
  }
}

export default App;

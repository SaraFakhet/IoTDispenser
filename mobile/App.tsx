import React from "react";
import * as Font from 'expo-font';
import { Router, Scene } from "react-native-router-flux";

import LaunchingScreen from "./scenes/LaunchingScreen";
import AuthScene from "./scenes/AuthScene";
import ChooseUser from "./scenes/ChooseUser";
import SignUpTS from "./scenes/CleanTechUser/SignUpTS";
import SignUpRL from "./scenes/RespoLogUser/SignUpRL";
import SignUpUL from "./scenes/LambdaUser/SignUpUL";

class App extends React.Component {

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Arial: require("./assets/fonts/Arial.ttf"),
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
        </Scene>
      </Router>
    );
  }
}

export default App;

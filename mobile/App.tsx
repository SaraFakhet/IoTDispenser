import React from "react";
import * as Font from 'expo-font';
import { Router, Scene } from "react-native-router-flux";

import LaunchingScreen from "./scenes/LaunchingScreen";
import AuthScene from "./scenes/AuthScene";
import ChooseUser from "./scenes/ChooseUser";
import SignUpTS from "./scenes/CleanTechUser/SignUpTS";
import SignUpRL from "./scenes/RespoLogUser/SignUpRL";
import SignUpUL from "./scenes/LambdaUser/SignUpUL";
import LambdaHome from "./scenes/LambdaUser/Home";

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
          <Scene key="sign" hideNavBar>
            <Scene
              key="loading"
              component={LaunchingScreen}
              initial
            ></Scene>
            <Scene key="auth" component={AuthScene}></Scene>
            <Scene key="signup" component={ChooseUser}></Scene>
            <Scene
              key="signupRL"
              component={SignUpRL}
              title="Inscription"
              hideNavBar={false}
            ></Scene>
            <Scene
              key="signupUL"
              component={SignUpUL}
              title="Inscription"
              hideNavBar={false}
            ></Scene>
            <Scene
              key="signupTS"
              component={SignUpTS}
              title="Inscription"
              hideNavBar={false}
            ></Scene>
          </Scene>
          <Scene key="roothome" hideNavBar tabs>
            <Scene
              key="homeUL"
              component={LambdaHome}
              title="Home"
            ></Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;

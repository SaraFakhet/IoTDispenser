import React from "react";
import { Router, Scene } from "react-native-router-flux";

import LaunchingScreen from "./scenes/LaunchingScreen";
import AuthScene from "./scenes/AuthScene";
import ChooseUser from "./scenes/ChooseUser";
import SignUpTS from "./scenes/CleanTechUser/SignUpTS";
import SignUpRL from "./scenes/RespoLogUser/SignUpRL";
import SignUpUL from "./scenes/LambdaUser/SignUpUL";
import Home from "./scenes/LambdaUser/Home";

class App extends React.Component {
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
          <Scene
            key = "home"
            component={Home}
            title="Home"
          ></Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { Router, Scene } from "react-native-router-flux";

import LaunchingScreen from "./scenes/LaunchingScreen";
import AuthScene from "./scenes/AuthScene";
import ChooseUser from "./scenes/SignUp/ChooseUser";

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
        </Scene>
      </Router>
    );
  }
}

export default App;

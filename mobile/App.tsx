import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import {Router, Scene} from 'react-native-router-flux';

import LaunchingScreen from './scenes/LaunchingScreen';
import AuthScene from './scenes/AuthScene';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loading" component={LaunchingScreen} initial={true} hideNavBar={true}></Scene>
          <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;

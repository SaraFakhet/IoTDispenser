import React, { Component } from "react";
import { View, StyleSheet, Image, StatusBar, Platform } from "react-native";
import { Form, Item, Input, Text, Button } from "native-base";

import { Actions } from "react-native-router-flux";
import api from "../api/api";

interface IProps {
  email: string;
  password: string;
}

interface IState {
  email: string;
  password: string;
}

class AuthScene extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChangeEmail(event: any) : void {
    this.setState({ email: event });
  }

  handleOnChangePass(event: any) : void {
    this.setState({ password: event });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.top}></View>

        <View style={styles.middle}>
          <View style={styles.title}>
            <Text style={styles.textContainer}>Dispenser</Text>
            <Image
              source={require("../assets/logo_dispenser-white.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View style={styles.formArea}>
            <Text style={[styles.signin]}>Connexion</Text>
            <Form>
              <Item style={styles.formItems}>
                <Input placeholder="Email" onChangeText={e => this.handleOnChangeEmail(e)} style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input
                  secureTextEntry={true}
                  placeholder="Mot de Passe"
                  onChangeText={e => this.handleOnChangePass(e)}
                  style={styles.Input}
                />
              </Item>

              <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText} onPress={() => api.postUserAuth(this.state.email, this.state.password)} >Valider</Text>
                </Button>
              </View>
            </Form>
          </View>

          <View style={styles.signinzBtns}>
            <Button style={styles.plusSizeBtn}>
              <Text style={{ color: "#000000", fontSize: 30}}>Sign In</Text>
            </Button>
            <View style={{ margin: 10 }}></View>
            <Button style={[styles.otherBtn, {marginTop: 10}]} onPress={() => Actions.replace('signup')}>
              <Text style={{ color: "#000000" }}>Sign Up</Text>
            </Button>
          </View>
        </View>
        <View style={styles.bottom}>
        </View>
      </View>
    );
  }
}

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 280,
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
    fontFamily: "American Typewriter",
  },
  formArea: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    top: "30%",
    paddingBottom: 15,
  },
  signin: {
    color: "#000000",
    marginTop: 20,
    fontSize: 24,
    alignSelf: "center",
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: "#2D3057",
    width: '90%'
  },
  Input: {
    fontSize: 12,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: "#000000",
    marginTop: 25,
    width: "50%",
    alignSelf: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  signinzBtns: {
    flexDirection: "row",
    top: "70%",
    justifyContent: "center"
  },
  plusSizeBtn:{
    height: 55,
    width: 115,
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
    alignSelf : 'center'
  }
});

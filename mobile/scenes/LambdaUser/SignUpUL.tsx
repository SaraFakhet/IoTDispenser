import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { Button } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import { Actions } from "react-native-router-flux";
import api from "../../api/api";

const SpaceBetween = () => {
  return <View style={{ margin: 5 }}></View>;
};

const items = [
    { label: "Tu", value: "usa" },
    { label: "Hors", value: "uk" },
    { label: "De", value: "france" },
    { label: "Ma", value: "usa" },
    { label: "Vue", value: "uk" },
]

interface IProps {
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  password: string,
  idEntreprise: number,
  role: string
}

interface IState {
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  password: string,
  confirmPassword: string,
  idEntreprise: number,
  role: string,
}
  
enum stateField {FIRSTNAME, LASTNAME, AGE, EMAIL, PASSWORD, CONFIRMPASSWORD, IDENTREPRISE}

class SignUpUL extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: 'Doe',
      age: 20,
      email: '',
      password: '',
      confirmPassword: '',
      idEntreprise: 1,
      role: 'employee',
    };
  }

  handleOnChange(event: any, field: stateField) : void {
    switch(field) {
      case stateField.FIRSTNAME:
        this.setState({firstName: event});
        break;
      case stateField.LASTNAME:
        this.setState({lastName: event});
        break;
      case stateField.AGE:
        this.setState({age: event});
        break;
      case stateField.EMAIL:
        this.setState({email: event});
        break;
      case stateField.PASSWORD:
        this.setState({password: event});
        break;
      case stateField.CONFIRMPASSWORD:
        this.setState({confirmPassword: event});
        break;
      case stateField.IDENTREPRISE:
        this.setState({idEntreprise: event});
        break;
      default:
        this.setState({firstName: event});
        break;
    }
    if (this.state.firstName === 'Joh') {
      this.prefill();
    }
  }

  prefill() {
    this.setState({
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      email: 'John.Doe@gmail.com',
      password: 'azerty',
      confirmPassword: 'azerty',
      idEntreprise: 1,
      role: 'employee',
    });
  }

  sendForm() {
    api.postCreateUser(
      this.state.firstName,
      this.state.lastName,
      this.state.age,
      this.state.email,
      this.state.password,
      this.state.idEntreprise,
      this.state.role)
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
      >
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View style={styles.titleView}>
            <Text style={styles.title}>Crée un compte</Text>
            <Text style={styles.subtitle}>
              En tant qu'utilisateur lambda, veuillez créer un compte et
              rejoindre votre entreprise.
            </Text>
          </View>
          <View style={styles.inputBox}>
            <View>
              <Text style={{ fontSize: 11 }}>Nom</Text>
              <TextInput
                style={styles.input}
                value={this.state.firstName}
                onChangeText={e => this.handleOnChange(e, stateField.LASTNAME)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Prénom</Text>
              <TextInput
                style={styles.input}
                value={this.state.email}
                onChangeText={e => this.handleOnChange(e, stateField.FIRSTNAME)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Email</Text>
              <TextInput
                style={styles.input}
                value={this.state.email}
                onChangeText={e => this.handleOnChange(e, stateField.EMAIL)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Mot de Passe</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={this.state.password}
                onChangeText={e => this.handleOnChange(e, stateField.PASSWORD)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Confirmer le mot de passe</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={this.state.password}
                onChangeText={e => this.handleOnChange(e, stateField.CONFIRMPASSWORD)}
              />
            </View>
            <SpaceBetween />
            <View style={{ zIndex: 2 }}>
              <Text style={{ fontSize: 11 }}>Entreprise</Text>
              <DropDownPicker
                items={items}
                containerStyle={{ height: 40, width: 301}}
                itemStyle={{ justifyContent: "flex-start" }}
                searchable
                searchablePlaceholder="Rechercher l'entreprise"
                searchableError={() => <Text>Introuvable dans la base de données</Text>}
                //dropDownMaxHeight={100}
                placeholder="Choisissez votre Entreprise"
                placeholderStyle={{ color: "gray" }}
                dropDownStyle={{ marginTop: 2 }}
              />
              <View style={{ marginTop: 50, marginBottom: 50, zIndex: 1 }}>
                <Button onPress={() => this.sendForm()}
                  style={styles.btn}
                >
                  <Text style={{ color: "white" }}>Terminer</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpUL;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    alignItems: "center",
    top: "5%",
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Arial",
    fontSize: 14,
    textAlign: "center",
    margin: 10,
    marginHorizontal: 40,
  },
  input: {
    height: 40,
    width: 300,
    borderStyle: "solid",
    borderWidth: 0.25,
    paddingLeft: 10,
  },
  inputBox: {
    top: "5%",
    alignItems: "center",
  },
  btn: {
    alignSelf: "center",
    width: 300,
    justifyContent: "center",
    backgroundColor: "black",
  },
});

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
import { Actions } from "react-native-router-flux";
import api from "../../api/api";

interface IProps {
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  password: string,
  entreprise: string,
  siret: string,
  adress: string,
  postal: string,
  city: string,
  country: string,
  contact: string,
  role: string
}

interface IState {
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  password: string,
  confirmPassword: string,
  entreprise: string,
  siret: string,
  adress: string,
  postal: string,
  city: string,
  country: string,
  contact: string,
  role: string,
}

const SpaceBetween = () => {
  return <View style={{ margin: 5 }}></View>;
};

enum stateField {FIRSTNAME, LASTNAME, AGE, EMAIL, PASSWORD, CONFIRMPASSWORD, ENTREPRISE, SIRET, ADRESS, POSTAL, CITY, COUNTRY, CONTACT}

class SignUpRL extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: 20,
      email: '',
      password: '',
      confirmPassword: '',
      entreprise: '',
      siret: '',
      adress: '',
      postal: '',
      city: '',
      country: '',
      contact: '',
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
      case stateField.ENTREPRISE:
        this.setState({entreprise: event});
        break;
      case stateField.SIRET:
        this.setState({siret: event});
        break;
      case stateField.ADRESS:
        this.setState({adress: event});
        break;
      case stateField.POSTAL:
        this.setState({postal: event});
        break;
      case stateField.CITY:
        this.setState({city: event});
        break;
      case stateField.COUNTRY:
        this.setState({country: event});
        break;
      case stateField.CONTACT:
        this.setState({contact: event});
        break;
      default:
        this.setState({firstName: event});
        break;
    }
    if (this.state.firstName === 'Damie') {
      this.prefill();
    }
  }

  prefill() {
    this.setState({
      firstName: 'Damien',
      lastName: 'Doe',
      age: 20,
      email: 'Damien.Doe@gmail.com',
      password: 'azerty',
      confirmPassword: 'azerty',
      entreprise: 'Microsoft',
      siret: '123456',
      adress: '14 Rue Voltaire',
      postal: '94270',
      city: 'Kremlin-Bicêtre',
      country: 'France',
      contact: '0641673759',
      role: 'responsable',
    });
  }

  async sendForm() {
    let entreprise = await api.postEntreprise(this.state.entreprise, this.state.siret);
    let idEntreprise = entreprise.id;
    api.postCreateUser(
      this.state.firstName,
      this.state.lastName,
      this.state.age,
      this.state.email,
      this.state.password,
      idEntreprise,
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
              En tant que responsable logistique, veuillez créer un compte et
              inscrire votre entreprise.
            </Text>
          </View>
          <View style={styles.inputBox}>
          <View>
              <Text style={{ fontSize: 11 }}>Prénom</Text>
              <TextInput
                style={styles.input}
                value={this.state.firstName}
                onChangeText={e => this.handleOnChange(e, stateField.FIRSTNAME)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Nom</Text>
              <TextInput
                style={styles.input}
                value={this.state.lastName}
                onChangeText={e => this.handleOnChange(e, stateField.LASTNAME)}
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
                onChangeText={e => this.handleOnChange(e, stateField.PASSWORD)} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Confirmer le mot de passe</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={this.state.confirmPassword}
                onChangeText={e => this.handleOnChange(e, stateField.CONFIRMPASSWORD)}
              />
            </View>
          </View>
          <View style={{ top: "5%", alignItems: "center", margin: 30 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Informations sur l'Entreprise
            </Text>
          </View>
          <View style={styles.inputBox}>
            <View>
              <Text style={{ fontSize: 11 }}>Nom de l'Entreprise</Text>
              <TextInput
                style={styles.input}
                value={this.state.entreprise}
                onChangeText={e => this.handleOnChange(e, stateField.ENTREPRISE)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Numéro SIRET</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={this.state.siret}
                onChangeText={e => this.handleOnChange(e, stateField.SIRET)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Adresse</Text>
              <TextInput
                style={styles.input}
                value={this.state.adress}
                onChangeText={e => this.handleOnChange(e, stateField.ADRESS)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Code Postal</Text>
              <TextInput
                style={styles.input} 
                keyboardType="numeric"
                value={this.state.postal}
                onChangeText={e => this.handleOnChange(e, stateField.POSTAL)}
              />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Ville</Text>
              <TextInput
              style={styles.input}
              value={this.state.city}
              onChangeText={e => this.handleOnChange(e, stateField.CITY)} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Pays</Text>
              <TextInput
                style={styles.input}
                value={this.state.country}
                onChangeText={e => this.handleOnChange(e, stateField.COUNTRY)} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Contact</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="+33"
                value={this.state.contact}
                onChangeText={e => this.handleOnChange(e, stateField.CONTACT)}
              />
            </View>
          </View>
          <View style={{ marginTop: 100, marginBottom: 50 }}>
            <Button onPress={() => this.sendForm()} style={styles.btn}>
              <Text style={{ color: "white" }}>Terminer</Text>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpRL;

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

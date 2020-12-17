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

const SpaceBetween = () => {
  return <View style={{ margin: 5 }}></View>;
};

class SignUpRL extends Component {
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
              <Text style={{ fontSize: 11 }}>Nom et prénom</Text>
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Email</Text>
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Mot de Passe</Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Confirmer le mot de passe</Text>
              <TextInput style={styles.input} secureTextEntry />
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
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Numéro SIRET</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Adresse</Text>
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Code Postal</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Ville</Text>
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Pays</Text>
              <TextInput style={styles.input} />
            </View>
            <SpaceBetween />
            <View>
              <Text style={{ fontSize: 11 }}>Contact</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="+33"
              />
            </View>
          </View>
          <View style={{ marginTop: 100, marginBottom: 50 }}>
            <Button onPress={() => Actions.jump('homeRL')} style={styles.btn}>
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

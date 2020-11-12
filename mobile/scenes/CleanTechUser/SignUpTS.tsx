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

const SpaceBetween = () => {
  return <View style={{ margin: 5 }}></View>;
};

const items = [
    { label: "Prends", value: "usa" },
    { label: "Tes", value: "uk" },
    { label: "Caleçons", value: "france" },
    { label: "Sales", value: "usa" },
  ]

class SignUpTS extends Component {
    
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
              En tant que technicien-ne de surface, veuillez créer un compte et
              rejoindre votre entreprise.
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
                <Button onPress={() => null} style={styles.btn}>
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

export default SignUpTS;

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

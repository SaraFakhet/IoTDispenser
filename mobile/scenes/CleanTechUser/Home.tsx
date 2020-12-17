import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight,
} from "react-native";
import { Text } from "native-base";

interface IProps {
  id: number,
  people: number,
  idEntreprise: number,
  countDay: number, //id
  countMonth: number, //id
  lastHandwashing: Date,
  delayHandwashing: Date,
  role: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  countHandwashingDay: number,
  countHandwashingMonth: number
}

interface IState {
  id: number,
  people: number,
  idEntreprise: number,
  countDay: number,
  countMonth: number,
  lastHandwashing: Date,
  delayHandwashing: Date,
  role: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  countHandwashingDay: number,
  countHandwashingMonth: number
}

const Space = () => {
  return <View style={{ height: 20 }} />;
};

const HomeTS = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.topTitle}>
          <Text style={styles.textContainer}>DISPENSER</Text>
          <Image
            source={require("../../assets/logo_dispenser-white.png")}
            style={{ width: 35, height: 35, top: "2%" }}
          />
        </View>
      </View>
      <View style={styles.scrollView}>
        <View style={styles.box}>
          <View style={{ height: 15 }} />
          <Text style={styles.text}>
            Le distributeur est{" "}
            <Text style={{fontWeight: "700", color: "#353535"}}>
              vide
            </Text>{" "}
            🥵
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => Alert.alert("Bsahtek")}
          >
            <View>
              <Text style={styles.textButton}>
                Le distributeur a été rempli 🥳
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <Space/>
        <View style={styles.box}>
          <Text style={[styles.textStat, {right: 10}]}>
              Quantité restante dans le{" "}
              <Text style={{
                  fontFamily: "American Typewriter",
                  fontWeight: "700",
                  color: "#353535",
                  fontSize: 13
                }}>DISPENSER
                  </Text> :
          </Text>
          <View style={{flexDirection: 'row', top: 5}}>
            <View style={{right: 10}}>
                <Text style={styles.textStatMetric}>
                <Text style={{
                  fontSize: 50,
                  fontFamily: "Helvetica Neue",
                  color: "#373737",
                }}>
                    X</Text> ml
                </Text>
            </View>
            <View style={{marginVertical: 15, height: 75, left: 20, bottom: 5}}>
                <Image source={require("../../assets/water.png")}
                style={{height: 70, width: 70}}/>
                <View style={{backgroundColor: '#F8F8F8', width: 24, height: 5, bottom: 47, left: 23, position: 'relative'}}/>
                <View style={{backgroundColor: '#F8F8F8', width: 24, height: 5, bottom: 21, left: 23, position: 'relative'}}/>
                <View style={{backgroundColor: '#000', width: 30, height: 2, bottom: 65, left: 20, zIndex: 1}}/>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 150,
    width: "100%",
  },
  topTitle: {
    position: "relative",
    backgroundColor: "black",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    color: "#FCFDFF",
    top: "2%",
    fontSize: 25,
    textAlign: "center",
    marginRight: 5,
    paddingRight: 5,
    fontFamily: "American Typewriter",
  },
  scrollView: {
    width: "85%",
    height: "82%",
    top: "18%",
    position: "absolute",
    backgroundColor: "transparent",
    alignSelf: "center",
    flexDirection: "column",
    zIndex: 1,
  },
  box: {
    width: "96%",
    alignSelf: "center",
    backgroundColor: "#F8F8F8",
    flexDirection: "column",
    paddingHorizontal: 17,
    paddingTop: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2,
    shadowOffset: { height: 2, width: 0 },
  },
  text: {
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    color: "#242424",
    fontSize: 14,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 5,
    backgroundColor: "black",
    alignItems: "center",
    width: 130,
    borderRadius: 20,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.53,
    shadowRadius: 0.1,
    shadowOffset: { height: 3, width: 3 },
  },
  textButton: {
    fontFamily: "Helvetica Neue",
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: 80,
    marginTop: 8,
  },
  textStat: {
    fontFamily: "Helvetica Neue",
    color: "#575757",
    fontSize: 12,
    fontWeight: "bold",
  },
  textStatMetric: {
    fontFamily: "Helvetica Neue",
    color: "#373737",
    fontSize: 30,
    fontWeight: "bold",
    bottom: "15%",
    paddingTop: 10,
    top: 5,
    right: 10
  },
  bottom: {
    position: "relative",
    height: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 0,
  },
  middle: {},
});

export default HomeTS;

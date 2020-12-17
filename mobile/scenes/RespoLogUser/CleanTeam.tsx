import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Button } from "react-native-elements";
import { Item, Text } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "John Doe",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "John Doe",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "John Doe",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "John Doe",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "John Doe",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "John Doe",
  },
];

class Space extends Component {
  render() {
    return <View style={{ height: 10 }}></View>;
  }
}

const CleanTeam = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.box}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
            <TouchableHighlight
              style={styles.button}
              onPress={() => Alert.alert("Miskine")}
            >
              <View>
                <Text style={styles.textButton}>Désactiver le compte</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <Space />
      </View>
    );
  };

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
      <FlatList style={styles.scrollView} data={DATA} renderItem={renderItem} />
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
    backgroundColor: "#F1F0FC",
    paddingHorizontal: 17,
    paddingTop: 30,
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
    color: "#545454",
    fontSize: 18,
    fontWeight: 'bold',
    right: 20,
    width: 90
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    width: 100,
    borderRadius: 20,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.53,
    shadowRadius: 0.1,
    shadowOffset: { height: 3, width: 3 },
    left: 30,
    bottom: 15
  },
  textButton: {
    fontFamily: "Helvetica Neue",
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 10,
    width: 70,
  },
  textStat: {
    fontFamily: "Helvetica Neue",
    color: "#575757",
    fontSize: 13,
    fontWeight: "bold",
  },
  textStatBtm: {
    bottom: "10%",
  },
  textStatMetric: {
    fontFamily: "Helvetica Neue",
    color: "#575757",
    fontSize: 30,
    fontWeight: "bold",
    bottom: "15%",
    paddingTop: 10,
    left: 40,
  },
  bottom: {
    position: "relative",
    height: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 0,
  },
  middle: {},
});

export default CleanTeam;

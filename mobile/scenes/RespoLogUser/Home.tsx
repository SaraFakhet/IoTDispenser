import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import Carousel from 'react-native-snap-carousel';
import { Text } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

interface IProps {
  entreprise: string
}

interface IState {
  entreprise: string
}

class Space extends Component {
  render() {
    return <View style={{ height: 20 }}></View>;
  }
}

class HomeRL extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      entreprise: props.entreprise
    };
  }

  render() {
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
        <ScrollView style={styles.scrollView}>
          <View style={styles.box}>
            <Text style={[styles.text, {marginBottom: 10, bottom: 10}]}>
              Bienvenue dans le dashboard{"\n"}
              <Text
                style={{
                  fontFamily: "American Typewriter",
                  fontWeight: "700",
                  color: "#353535",
                  fontSize: 13,
                }}
              >
                DISPENSER
              </Text>{" "}
              de <Text style={{fontWeight: "700", color: "#353535", fontSize: 13}} > { this.state.entreprise } 📊</Text>
            </Text>
          </View>
          <Space />
          <View style={[styles.box, {paddingTop: 25}]}>
            <Text style={[styles.textStat, styles.textStatBtm]}>
              Temps moyen pour vider le <Text style={{
                  fontFamily: "American Typewriter",
                  fontWeight: "700",
                  color: "#353535",
                  fontSize: 13,
                }}
              >
                DISPENSER
              </Text>
            </Text>
            <Text style={styles.textStatMetric}>
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Helvetica Neue",
                  color: "#575757",
                }}
              >
                14
              </Text>{" "}
              jours
            </Text>
          </View>
          <Space />
          <View style={[styles.box, { height: 270 }]}>
            <Text style={[styles.textStat, { bottom: "5%" }]}>
              Quantité journalière de produit consommé
            </Text>
            <View style={{ bottom: 30, left: 10 }}>
              <VictoryChart
                height={240}
                width={340}
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                domain={{ y: [0, 12] }}
              >
                <VictoryBar
                  style={{ data: { fill: "#FFACAC" } }}
                  cornerRadius={{ top: 5 }}
                  barWidth={23}
                  data={[
                    { x: "lun.", y: 4 },
                    { x: "mar.", y: 5 },
                    { x: "mer.", y: 2 },
                    { x: "jeu.", y: 4 },
                    { x: "ven.", y: 10 },
                    { x: "sam.", y: 0 },
                    { x: "dim.", y: 0 },
                  ]}
                />
              </VictoryChart>
            </View>
          </View>
          <Space />
          <View style={[styles.box, {paddingTop: 25}]}>
            <Text style={[styles.textStat, styles.textStatBtm]}>
              Quantité de produit consommé ce mois
            </Text>
            <Text style={styles.textStatMetric}>
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Helvetica Neue",
                  color: "#575757",
                }}
              >
                0,6
              </Text>{" "}
              L
            </Text>
          </View>
          <Space/>
        </ScrollView>
        <View style={styles.bottom}/>
      </View>
    );
  }
}

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
    flexDirection: "column",
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
    color: "#242424",
    fontSize: 13,
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 5,
    backgroundColor: "black",
    alignItems: "center",
    width: 200,
    borderRadius: 15,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.53,
    shadowRadius: 0.1,
    shadowOffset: { height: 3, width: 3 },
  },
  textButton: {
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
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

export default HomeRL;
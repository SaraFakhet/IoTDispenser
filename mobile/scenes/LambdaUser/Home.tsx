import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import { Text } from "native-base";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";
import api from "../../api/api";
import { Actions } from "react-native-router-flux";

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
  countHandwashingMonth: number,
}

class Space extends Component {
  render() {
    return <View style={{ height: 20 }}></View>;
  }
}

class LambdaHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      id: props.id,
      people: props.people,
      idEntreprise: props.idEntreprise,
      countDay: props.countDay,
      countMonth: props.countMonth,
      lastHandwashing: props.lastHandwashing,
      delayHandwashing: props.delayHandwashing,
      countHandwashingDay: props.countHandwashingDay,
      countHandwashingMonth: props.countHandwashingMonth,
      role: props.role,
      password: props.password,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      age: props.age
    };
  }

  handleHandWashing = async () => {
    let newStats = await api.postIncrementHandwashing(this.state.id);
    if (newStats) {
      this.setState({countHandwashingDay:newStats.countHandwashingDay, countHandwashingMonth: newStats.countHandwashingMonth})
    }
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
          <Text style={[styles.text, {fontWeight: 'bold'}]}>Hello {this.state.firstName}! 🙋</Text>
          <View style={{ height: 15 }}/>
            <Text style={styles.text}>
              Pour alimenter nos data set et ainsi offrir une{" "}
              <Text
                style={{ fontWeight: "700", color: "#353535", fontSize: 13 }}
              >
                visualisation
              </Text>{" "}
              et un{" "}
              <Text
                style={{ fontWeight: "700", color: "#353535", fontSize: 13 }}
              >
                suivi optimal
              </Text>{" "}
              de vos données, votre participation est requise 🙏
            </Text>
            <View style={{ height: 15 }}/>
            <Text style={styles.text}>
              Lorsque vous vous lavez les mains avec{" "}
              <Text
                style={{
                  fontFamily: "American Typewriter",
                  fontWeight: "700",
                  color: "#353535",
                  fontSize: 13,
                }}
              >
                DISPENSER
              </Text>
              , n’hésitez pas à le signaler en appuyant sur le bouton ci-dessous
              :
            </Text>
            <Button
              title="Mes mains sont clean 🧼"
              onPress={() => this.handleHandWashing()}
              buttonStyle={styles.button}
              titleStyle={styles.textButton}
            ></Button>
          </View>
          <Space />
          <View style={styles.box}>
            <Text style={[styles.textStat, styles.textStatBtm]}>
              Combien de fois me suis-je lavé-e les mains aujourd’hui ?
            </Text>
            <Text style={styles.textStatMetric}>
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Helvetica Neue",
                  color: "#575757",
                }}
              >
              { this.state.countHandwashingDay }
              </Text>{" "}
              fois
            </Text>
          </View>
          <Space />
          <View style={[styles.box, {height: 270}]}>
            <Text style={[styles.textStat, {bottom: '5%'}]}>
              Fréquence hebdomadaire de lavage de mains
            </Text>
            <View style={{bottom: 40}}>
              <VictoryChart
                height={240}
                width={350}
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                domain={{ y: [0, 12] }}
              >
                <VictoryBar
                  style={{ data: { fill: "#A3A1FB" } }}
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
          <View style={styles.box}>
            <Text style={[styles.textStat, styles.textStatBtm]}>
            Moyenne de lavage des mains par jour
            </Text>
            <Text style={styles.textStatMetric}>
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Helvetica Neue",
                  color: "#575757",
                }}
              >
                { (this.state.countHandwashingDay / 24).toFixed(2) }
              </Text>{" "}
              fois
            </Text>
          </View>
          <Space/>
        </ScrollView>
        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 150,
    width: "100%"
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
    alignSelf: 'center',
    backgroundColor: "#F5FCF6",
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

export default LambdaHome;

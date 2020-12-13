import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { Text } from "native-base";

  class Space extends React.Component {
  render() {
    return <View style={{ height: 25 }}></View>;
  }
}

class Prevention extends React.Component {
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
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <View style={{ height: 15 }}></View>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <Space/>
          <View style={styles.box}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <View style={{ height: 15 }}></View>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <Space/>
        </ScrollView>

        <Space />

        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  top: {
    position: "relative",
    backgroundColor: "#000000",
    height: 150,
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
    color: "#FCFDFF",
    top: "2%",
    fontSize: 25,
    textAlign: "center",
    marginRight: 5,
    paddingRight: 5,
    fontFamily: Platform.OS === "ios" ? "American Typewriter" : "Roboto",
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
    backgroundColor: "#F1F0FC",
    flexDirection: "column",
    paddingHorizontal: 17,
    paddingVertical: 30,
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
  bottom: {
    position: "relative",
    height: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 0,
  },
});

export default Prevention;

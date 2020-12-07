import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Text } from "native-base";

interface IProps {
    user: string;
}

interface IState {
    user: string;
}

class LambdaHome extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.top}>

                </View>
                <View>

                </View>
                <View style={styles.bottom}>

                </View>
                <Text>User Lambda.</Text>
                <Text>This is : { this.state.user }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    top: {
        position: "relative",
        backgroundColor: "#000000",
        height: 150,
    },
    bottom: {
        position: "relative",
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
    middle: {

    }
})

export default LambdaHome;
import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";

interface IProps {
    user: string;
}

interface IState {
    user: string;
}

class Home extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    render() {
        return (
            <View>
                <Text>User Lambda.</Text>
                <Text>This is : { this.state.user }</Text>
            </View>
        );
    }
}

export default Home;
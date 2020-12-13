import baseUrl from '../config/baseurl';
import { Actions } from "react-native-router-flux";

const getHello = async () => {
    try {
      let response = await fetch(`${baseUrl.API_URL}`);
      let json = await response.json();
      console.log(JSON.stringify(json));
      Actions.replace('homeUL', {user:json.title});
    } catch (error) {
      console.error(error);
    }
};

const postUserAuth = async (email: string, password: string) => {
    try {
        console.log("send email : " + email + ", password : " + password);
        let response = await fetch(`${baseUrl.API_URL}/connect`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
        });
        if (response.ok) {
            let json = await response.json();
            console.log(JSON.stringify(json));
            Actions.replace('homeUL', {user:json.username});
            return json;
        }
    } catch (error) {
        console.error(error);
    }
}

export default {
    getHello,
    postUserAuth
};
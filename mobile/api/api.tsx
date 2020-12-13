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

const postCreateUser = async (
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    password: string,
    idEntreprise: number,
    role: string) => {
    try {
        console.log("send email : " + email + ", password : " + password);
        let response = await fetch(`${baseUrl.API_URL}/create-user`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                age: age,
                email: email,
                password: password,
                idEntreprise: idEntreprise,
                role: role}),
        });
        /*if (response.ok) {
            let json = await response.json();
            console.log(JSON.stringify(json));
            Actions.replace('homeUL', {firstName:json.firstName});
            return json;
        }*/
    } catch (error) {
        console.error(error);
    }
}

export default {
    getHello,
    postUserAuth,
    postCreateUser
};
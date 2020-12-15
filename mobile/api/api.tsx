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
        console.log("send firstname : " + firstName + ", lastName : " + lastName + ", age : " + age
        + ", email : " + email + ", password : " + password + ", idEntreprise : " + idEntreprise + ", role : " + role);
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

const getPeople = async () => { //FIXME
    try {
      let response = await fetch(`${baseUrl.API_URL}/people`);
      let json = await response.json();
      console.log(JSON.stringify(json));
      Actions.refresh();
    } catch (error) {
      console.error(error);
    }
};

const postIncrementHandwashing = async (id: number) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/hand-washing`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id}),
        });
    } catch (error) {
        console.error(error);
    }
}

const getStats = async () => { //FIXME
    try {
      let response = await fetch(`${baseUrl.API_URL}/statistics-user`);
      let json = await response.json();
      console.log("stats : countHandwashing : " + JSON.stringify(json.countHandwashingDay) + " countHandwashingMonth : " + JSON.stringify(json.countHandwashingDay));
      Actions.refresh({countHandwashingDay:json.countHandwashingDay, countHandwashingMonth: json.countHandwashingMonth});
    } catch (error) {
      console.error(error);
    }
};

const postProductRefill = async (id: number) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/product/refill`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id}),
        });
    } catch (error) {
        console.error(error);
    }
}

const postProducts = async (idEntreprise: number) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/products`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idEntreprise: idEntreprise}),
        });
    } catch (error) {
        console.error(error);
    }
}

const getEntreprise = async () => { //FIXME
    try {
      let response = await fetch(`${baseUrl.API_URL}/entreprise`);
      let json = await response.json();

      console.log("entreprise : " + JSON.stringify(json.entreprise));
      Actions.refresh({entreprise:json.entreprise});
    } catch (error) {
      console.error(error);
    }
};

const getAllEntreprises = async () => { //FIXME
    try {
      let response = await fetch(`${baseUrl.API_URL}/all-entreprise`);
      let json = await response.json();

      //Actions.refresh();
    } catch (error) {
      console.error(error);
    }
};

const postEntreprise = async (name: string, siret: string) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/entreprise`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                siret: siret}),
        });
    } catch (error) {
        console.error(error);
    }
}

export default {
    getHello,
    postUserAuth,
    postCreateUser,
    postIncrementHandwashing,
    getStats,
    getPeople,
    postProductRefill,
    postProducts,
    getEntreprise,
    getAllEntreprises,
    postEntreprise
};
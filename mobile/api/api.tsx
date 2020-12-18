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
            let peopleJson = await getPeople(json.people);
            let statsJson = await getStats(json.id);

            let home: string = '';
            switch (json.role) {
              case "employee":
                home = 'homeUL';
                break;
              case "responsable":
                home = 'homeRL';
                break;
              case "surface_technician":
                home = 'homeTS';
                break;
            }
            if (json.role === "surface_technician") {
              let productJson = await getProducts();
              Actions.replace(home, {
                lastQuantity: productJson.lastQuantity
              })
            } else {
              Actions.replace(home, {
                id: json.id,
                people: json.people,
                idEntreprise: json.idEntreprise,
                countDay: json.countDay,
                countMonth: json.countMonth,
                lastHandwashing: json.lastHandwashing,
                delayHandwashing: json.delayHandwashing,
                countHandwashingDay: statsJson.countHandwashingDay,
                countHandwashingMonth: statsJson.countHandwashingMonth,
                role: json.role,
                password: json.password,
                firstName: peopleJson.firstName,
                lastName: peopleJson.lastName,
                email: peopleJson.email,
                age: peopleJson.age
              });
            }
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
        if (response.ok) {
            await postUserAuth(email, password);
        }
    } catch (error) {
        console.error(error);
    }
}

const getPeople = async (id: number) => {
    try {
      let response = await fetch(`${baseUrl.API_URL}/people/` + id);
      let json = await response.json();
      console.log(JSON.stringify(json));
      return json;
    } catch (error) {
      console.error(error);
    }
};

const postIncrementHandwashing = async (userId: number) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/hand-washing`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: userId}),
        });
        if (response.ok) {
          let statsJson = await getStats(userId);
          console.log("Handwashing incremented")
          let result = {countHandwashingDay: statsJson.countHandwashingDay, countHandwashingMonth: statsJson.countHandwashingMonth}
          return result;
        }
    } catch (error) {
        console.error(error);
    }
}

const getStats = async (userId: number) => {
    try {
      let response = await fetch(`${baseUrl.API_URL}/statistics-user/` + userId);
      let json = await response.json();
      console.log("stats : countHandwashingDay : " + JSON.stringify(json.countHandwashingDay) + " countHandwashingMonth : " + JSON.stringify(json.countHandwashingDay));
      return json;
    } catch (error) {
      console.error(error);
    }
};

const postProductRefill = async () => {
    try {
        let response = await fetch(`${baseUrl.API_URL}/product/refill`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1
            }),
        });
    } catch (error) {
        console.error(error);
    }
}

const postProducts = async (idEntreprise: number, idArduino: number) => { //FIXME
    try {
        let response = await fetch(`${baseUrl.API_URL}/product`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idEntreprise: idEntreprise,
                idArduino: idArduino}),
        });
    } catch (error) {
        console.error(error);
    }
}

const getProducts = async () => {
  try {
      let response = await fetch(`${baseUrl.API_URL}/product/1`);
      return response.json();
  } catch (error) {
      console.error(error);
  }
}

const getEntreprise = async (idEntreprise: number) => {
    try {
      let response = await fetch(`${baseUrl.API_URL}/entreprise/` + idEntreprise);
      let json = await response.json();
      //console.log("entreprise : " + JSON.stringify(json));
      Actions.refresh({entreprise:json.entreprise});
    } catch (error) {
      console.error(error);
    }
};

const getAllEntreprises = async () => {
    try {
      let response = await fetch(`${baseUrl.API_URL}/all-entreprise`);
      let json = await response.json();
      //console.log(JSON.stringify(json))
      //Actions.refresh();
    } catch (error) {
      console.error(error);
    }
};

const postEntreprise = async (name: string, siret: string) => {
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
        if (response.ok) {
          return response.json();
        }
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
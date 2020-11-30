import baseUrl from '../config/baseurl';

const getHello = async () => {
    try {
      let response = await fetch(`${baseUrl.API_URL}`);
      let json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
};

const postUserAuth = async (email: string, password: string) => {
    try {
        const result = await fetch(`${baseUrl.API_URL}/connect`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
        });
        if (result.ok) {
            return await result.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export default {
    getHello,
    postUserAuth
};
import axios from 'axios';

export async function getData() {
    try {
        const result = await axios.get(`http://localhost:5000/usuarios/home`);
        // console.log(result)
        return result.data;
    } catch (error) {
        // console.log("teste")
        return null;
    }
}

export async function getDataLimited() {
    try {
        const result = await axios.get(`http://localhost:5000/usuarios/limit`);
        // console.log(result)
        return result.data;
    } catch (error) {
        // console.log("teste")
        return null;
    }
}
export async function getDataEmail(email) {
    try {
        const result = await axios.get(`http://localhost:5000/usuarios/${email}`);
        // console.log(result)
        return result.data;
    } catch (error) {
        // console.log("teste")
        return null;
    }
}

export async function getAll(email) {
    try {
        const result = await axios.get(`http://localhost:5000/usuarios/all/${email}`);
        // console.log(result)
        return result.data;
    } catch (error) {
        // console.log("teste")
        return null;
    }
}

export async function insert(city, info, data) {
    try {
        await axios.post(`http://localhost:3000/cadastrar`, {
            city: city,
            temperature: info,
            data: data
        });
    } catch (error) {
        return null;
    }
}
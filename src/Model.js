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
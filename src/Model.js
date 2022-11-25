import axios from 'axios';

export async function getData(query) {
    try {
        const result = await axios.get(`http://localhost:5000/weatherinfo/${query}`);
        return result.data;
    } catch (error) {
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
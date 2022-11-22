import axios from 'axios';
const API_KEY = '5c806e656d89d526db17fcd1b16f3b4d';

export async function searchCity(query) {
          try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&lang=pt_br&appid=${API_KEY}`);
            return response.data;
          } catch (error) {
            return null;
          }
          }

            
export async function getDays(lat, lon) {
          try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`);
            return response.data;
          } catch (error) {
            return null;
          }

        }
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.219.123:3330" // COLOCAR O IP DO DISPOSITIVO
});

export default api;
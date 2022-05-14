import axios from "axios";

export const request = axios.create({
    baseURL: "https://telzir-falemaisbr.herokuapp.com/"
});
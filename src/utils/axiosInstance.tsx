import axios from "axios"

// https://purple-anemone-veil.cyclic.app/
let local:string = "http://localhost:3001";
export const axiosInstance = axios.create({
    baseURL: local
})
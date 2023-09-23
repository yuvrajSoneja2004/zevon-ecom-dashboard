import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://purple-anemone-veil.cyclic.app/'
})
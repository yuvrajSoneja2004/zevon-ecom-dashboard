import axios from "axios"

export const getProducts = async () => {
    try {
        const res = await axios.get("https://purple-anemone-veil.cyclic.app/asending");
        return res.data;
    } catch (error) {
        return error;
    }
}
import axios from "axios"

export const fetchProductsApi = () => {
    return axios.get(`https://fakestoreapi.com/products`)
}

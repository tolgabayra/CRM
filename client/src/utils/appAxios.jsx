import axios from "axios"

export const mainAxios = axios.create({
    baseURL: "http://localhost:8000"
})

export const UserAxios = axios.create({
    baseURL: "http://localhost:5000"
})

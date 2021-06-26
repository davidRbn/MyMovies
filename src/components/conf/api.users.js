import axios from "axios";


const apiUser = axios.create({
    baseURL:'https://guarded-tor-06540.herokuapp.com/api'
})

export default apiUser
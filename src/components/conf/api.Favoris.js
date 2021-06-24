import Axios from 'axios'

const apiFavoris = Axios.create({
    baseURL : 'http://localhost:8080/api'
})

export default apiFavoris
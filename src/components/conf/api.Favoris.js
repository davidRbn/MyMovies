import Axios from 'axios'

const apiFavoris = Axios.create({
    baseURL : 'https://guarded-tor-06540.herokuapp.com/api'
})

export default apiFavoris
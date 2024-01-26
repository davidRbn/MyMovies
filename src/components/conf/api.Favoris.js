import Axios from "axios";

const apiFavoris = Axios.create({
  baseURL: "https://mymoviesback2-production.up.railway.app/api",
});

export default apiFavoris;

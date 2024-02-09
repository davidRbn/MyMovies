import Axios from "axios";

const apiUser = Axios.create({
  baseURL: "https://mymoviesback2-production.up.railway.app/api",
});

export default apiUser;

import Axios from "axios";

const apiFavoris = Axios.create({
  baseURL: `${process.env.REACT_APP_URL_FAVORIS}`,
});

export default apiFavoris;

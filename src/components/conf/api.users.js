import Axios from "axios";

const apiUser = Axios.create({
  baseURL: `${process.env.REACT_APP_URL_USER}`,
});

export default apiUser;

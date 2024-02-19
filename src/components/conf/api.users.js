import Axios from "axios";

const apiUser = Axios.create({
  baseURL: `${process.env.REACT_APP_URL_USER}`,
});

// const apiUser = Axios.create({
//   baseURL: "http://localhost:8080/api",
// });

export default apiUser;

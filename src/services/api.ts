import Axios from "axios";

export default Axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/`,
});

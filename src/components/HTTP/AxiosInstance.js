import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'

});
export default AxiosInstance;
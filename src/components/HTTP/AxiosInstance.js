import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'

});
// AxiosInstance.interceptors.request.use((req) => {
//   console.log('myreq', req)
//   req.headers.Authorization = 'My secret code 45'
//   return req;
// })
export default AxiosInstance;
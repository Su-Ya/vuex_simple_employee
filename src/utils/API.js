import axios from "axios";

let server = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

server.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default server;

/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.116:8081",
});

export default api;

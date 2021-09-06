import axios from "axios";
import { config } from "@config";

const API = axios.create({
  baseURL: config.baseServerUrl,
});

export default API;

// this file will contain all the request related to user

import axios from "axios";

const getAll = async () => {
  return axios.get("https://reqres.in/api/users");
};

export default { getAll };

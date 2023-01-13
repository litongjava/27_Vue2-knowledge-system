import axios from "../utils/request"

const base = {
  baseUrl: "/api",
  list: "/list"
};

const api = {
  getList(params) {
    return axios.get(base.baseUrl + base.list, {
      params
    })
  }
};

export default api;

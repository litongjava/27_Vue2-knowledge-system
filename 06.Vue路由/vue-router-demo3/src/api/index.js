import axios from "../utils/request";

const base = {
  url: "/api",
  list: "/api/FingerUnion/list.php",
  details: "/api/FingerUnion/details.php"
};

const api = {
  getList() {
    return axios.get(base.url + base.list);
  },

  getDetails(params) {
    return axios.get(base.url + base.details, {
      params,
    })
  }
};

export default api;

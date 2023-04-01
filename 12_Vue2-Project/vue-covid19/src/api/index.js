import base from "./base"
import request from "../utils/request";

const api = {
  getNcov(nparams) {
    return request.get(base.baseUrl + base.ncov,{nparams})
  }
};

export default api;

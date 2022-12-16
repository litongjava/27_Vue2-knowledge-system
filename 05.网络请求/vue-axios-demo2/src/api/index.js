import axios from "../utils/request"

const base = {
  banner: "/api/blueberrypai/getChengpinDetails.php"   // 首页banner路径
};

const api = {
  /**
   *  首页 banner位数据获取
   */
  getBanner() {
    return axios.get(base.banner)
  }
};

export default api

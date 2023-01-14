import axios from "axios"

export default {
    asyncUpdateBanner({ commit,dispatch },num) {
        //context.commit
        console.log(num);
        axios.get("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
          .then(res => {
            if (res.status === 200) {
              commit("updateBanner", res.data.banner)
            }
          })
          .catch(error => {
            commit("updateBanner", [])
          })
      }
}
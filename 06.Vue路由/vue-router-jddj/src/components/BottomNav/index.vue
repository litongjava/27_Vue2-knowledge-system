<template>
  <div class="bottom-nav">
      <ul class="nav-container">
          <li>
              <router-link exact to="/">
                <span class="iconfont icon-home"></span>   
                首页
              </router-link>
          </li>
          <li>
              <router-link to="/find">
                <span class="iconfont icon-searchcart"></span>
                发现
              </router-link>
          </li>
          <li>
              <router-link to="/cart">
                <span class="iconfont icon-add-cart"></span>
                购物车
              </router-link>
          </li>
          <li>
              <router-link to="/order">
                <span class="iconfont icon-order"></span>
                订单
              </router-link>
          </li>
          <li>
              <router-link to="/user">
                <span class="iconfont icon-usercenter"></span>
                我的
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.active {
    color: red;
}

.bottom-nav {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}

.bottom-nav .nav-container {
    overflow: hidden;
    clear: both;
}

.bottom-nav .nav-container li {
    float: left;
    width: 20%;
    text-align: center;
}

.bottom-nav .nav-container li a {
    display: block;
    margin-top: 7px;
    font-size: 12px;
}
.bottom-nav .nav-container li a span {
    font-size: 24px;
    display: block;
}

</style>
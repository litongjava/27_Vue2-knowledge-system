<template>
  <div id="app">
    <div id="nav">
      <router-link exact to="/">Home</router-link>
      |
      <router-link to="/about/1001">About</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>

<!--    <transition name="fade">-->
      <router-view>
      </router-view>
<!--    </transition>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.router-link-exact-active {
   /*color: red;*/
}

.router-link-active {
  color: red;
}

.active {
  color: red;
}
</style>

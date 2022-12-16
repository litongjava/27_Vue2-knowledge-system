<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <router-link to="/about/a1">A1</router-link>
      |
      <router-link to="/about/a2">A2</router-link>
    </div>
    <!-- 显示的位置 -->
    <router-view></router-view>
  </div>
</template>

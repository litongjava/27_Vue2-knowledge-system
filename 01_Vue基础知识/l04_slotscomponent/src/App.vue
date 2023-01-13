<template>
  <div id="app">
    <h3>插槽</h3>
    <SlotsComponent>
      <template #header>
        <div class="active">{{ message }}</div>
        <div>测试</div>
      </template>
      <!-- <template v-slot:footer="slotProps"> -->
      <!-- <template #footer="slotProps"> -->
      <template slot="footer" slot-scope="slotProps">
        <div>底部:{{ slotProps.message }}</div>
      </template>
    </SlotsComponent>
    <slots-component />
    <hr />
    <div>
      <h3>动态组件</h3>
      <button @click="clickHandle">切换</button>
      <keep-alive exclude="AComponent" :max="5">
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SlotsComponent from "./components/SlotsComponent.vue";
import AComponent from "./container/AComponent.vue";
import NotFound from "./container/NotFound.vue";
// import BComponent from "./container/BComponent.vue";
const BComponent = () => ({
  component: import("./container/BComponent.vue"),
  error: NotFound,
  delay: 3000, // 加载权重问题，默认权重200  // 1200 1000 3000
});

export default {
  name: "App",
  data() {
    return {
      message: "Hello，我是插槽结构!",
      currentComponent: AComponent,
    };
  },
  components: {
    SlotsComponent,
    AComponent,
    BComponent,
  },
  methods: {
    clickHandle() {
      this.currentComponent =
        this.currentComponent === AComponent ? BComponent : AComponent;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>

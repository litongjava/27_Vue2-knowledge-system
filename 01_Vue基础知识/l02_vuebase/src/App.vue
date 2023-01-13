<template>
  <div id="app">
    <ClassAndStyle></ClassAndStyle>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import conditional from "./components/conditional.vue"
import list from "./components/list.vue"
import events from "./components/events.vue"
import Abbreviations from "./components/Abbreviations.vue"
import lists from "./components/lists.vue"
import Forms from "./components/Forms.vue"
import Computeds from "./components/Computeds.vue"
import watchs from "./components/watchs.vue"
import ClassAndStyle from "./components/ClassAndStyle.vue"
import MyComponent from "./components/MyComponent.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    conditional,
    list,
    events,
    Abbreviations,
    lists,
    Forms,
    Computeds,
    watchs,
    ClassAndStyle,
    MyComponent,  // 依赖注入
  }
}
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
</style>

<template>
  <h3>Children</h3>
  <p>{{ myData }}</p>
  <button @click="eventHandle">触发事件</button>
</template>

<script>

import { inject } from "vue"

export default {
    setup(){
        const myData = inject("customData");
        const eventHandle = inject("onEvent")
        return {
            myData,
            eventHandle
        }
    }
}
</script>

<style>

</style>
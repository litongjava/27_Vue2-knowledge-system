/**
 * flag对视图的可见进行切换
 */

import { onMounted, ref } from "vue"

export function flagMethod() {
    const flag = ref(true);

    onMounted(() =>{
        console.log("初始化");
    })

    const changeFlagHandle = () => {
        flag.value = false
    }
    return {
        flag,
        changeFlagHandle
    }
}
<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists" v-bind:key="index">{{ item }}</li>
    </ul>
    <ul>
        <li v-for="(item,index) in chengpins" v-bind:key="index">
            <span>{{ item.title }}</span>
        </li>
    </ul>
    <ul>
        <li v-for="(user,key,index) in userInfo" v-bind:key="index">{{key}}:{{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ["hello", "world", "demo"],
      chengpins: [
        {
          title: "24款套手工麦克杯1",
          content:
            "马克杯的意思是大柄杯子，因为马克杯的英文叫mug，所以翻译成马克杯。马克杯是家 常杯子的一种，一般用于牛奶、咖啡、茶类等热饮。西方一些国家也有用马克杯在工作 休息时喝汤的习惯。杯身一般为标准圆柱形或类圆柱形，并且杯身的一侧带有把手。马 克杯的把手形状通常为半环，通常材质为纯瓷、釉瓷、玻璃，不锈钢或塑料等。",
          img: "http://iwen.wiki/sxtstu/blueberrypai/images/item_03.png",
        },
        {
          title: "24款套手工麦克杯2",
          content:
            "马克杯的意思是大柄杯子，因为马克杯的英文叫mug，所以翻译成马克杯。马克杯是家 常杯子的一种，一般用于牛奶、咖啡、茶类等热饮。西方一些国家也有用马克杯在工作 休息时喝汤的习惯。杯身一般为标准圆柱形或类圆柱形，并且杯身的一侧带有把手。马 克杯的把手形状通常为半环，通常材质为纯瓷、釉瓷、玻璃，不锈钢或塑料等。",
          img: "http://iwen.wiki/sxtstu/blueberrypai/images/item_06.png",
        },
        {
          title: "24款套手工麦克杯3",
          content:
            "马克杯的意思是大柄杯子，因为马克杯的英文叫mug，所以翻译成马克杯。马克杯是家 常杯子的一种，一般用于牛奶、咖啡、茶类等热饮。西方一些国家也有用马克杯在工作 休息时喝汤的习惯。杯身一般为标准圆柱形或类圆柱形，并且杯身的一侧带有把手。马 克杯的把手形状通常为半环，通常材质为纯瓷、釉瓷、玻璃，不锈钢或塑料等。",
          img: "http://iwen.wiki/sxtstu/blueberrypai/images/item_03.png",
        },
        {
          title: "24款套手工麦克杯4",
          content:
            "马克杯的意思是大柄杯子，因为马克杯的英文叫mug，所以翻译成马克杯。马克杯是家 常杯子的一种，一般用于牛奶、咖啡、茶类等热饮。西方一些国家也有用马克杯在工作 休息时喝汤的习惯。杯身一般为标准圆柱形或类圆柱形，并且杯身的一侧带有把手。马 克杯的把手形状通常为半环，通常材质为纯瓷、釉瓷、玻璃，不锈钢或塑料等。",
          img: "http://iwen.wiki/sxtstu/blueberrypai/images/item_06.png",
        },
      ],
      userInfo:{
          name:"iwen",
          age:20,
          job:"it"
      }
    };
  },
};
</script>

<style>
</style>
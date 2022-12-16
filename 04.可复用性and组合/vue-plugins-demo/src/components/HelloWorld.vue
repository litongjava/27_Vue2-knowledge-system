<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="http://iwenwiki.com/api/livable/details/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://iwenwiki.com/api/livable/details/2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://iwenwiki.com/api/livable/details/3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width: 100%;
  /* height: 300px; */
}
</style>

<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getInfo() {
      axios.get("/api/index.json").then(res => {
        res = res.data.data;
        if (res) {
          this.swiperList = res.swiperList;
          this.iconList = res.iconList;
          this.recommendList = res.recommendList;
          this.weekendList = res.weekendList;
        }
      });
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>



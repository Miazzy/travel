<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1608/7c/7cddf77a474db832a3.img.jpg_600x330_e8da730a.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">长岛(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          3
        </div>
      </div>
    </div>

    <gallary :imgs="imgs" v-show="showGallary" @close="cancelGallary" />
  </div>
</template>

<script>
import Gallary from "common/Gallary";

export default {
  name: "Banner",
  components: {
    Gallary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1412/83/add511995b74a8716ede92ce96e721e7.water.jpg_710x420_8f304d7c.jpg",
        "http://img1.qunarzz.com/sight/p0/1412/23/714c87ad3126b2e1a675bea83351f80c.water.jpg_710x420_dd1540b3.jpg",
        "http://img1.qunarzz.com/sight/p0/1412/76/17b04ddb06a86ee544c5cb544742446e.water.jpg_710x420_8183a0e9.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    cancelGallary() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  height 0
  padding-bottom 55%
  overflow hidden
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.5)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>

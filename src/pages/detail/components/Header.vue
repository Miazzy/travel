<template>
  <div>
    <router-link to="/" tag="div" class="headerback" v-show="showIcon">
        <span class="iconfont headerback-icon">&#xe624;</span>
    </router-link>

    <div
      class="header-fixed"
      v-show="!showIcon"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showIcon: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showIcon = false;
      } else {
        this.showIcon = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.headerback
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.72rem
  height 0.72rem
  line-height 0.72rem
  text-align center
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.5)
  .headerback-icon
    color #fff
    font-size 0.4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>



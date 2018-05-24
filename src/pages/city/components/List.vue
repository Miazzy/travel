<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="SelectCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="each of item" :key="each.id" @click="SelectCity(each.name)">
            {{each.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    }
  },
  methods: {
    SelectCity(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    background #eee
    color #666
    font-size 0.26rem
    line-height 0.54rem
    padding-left 0.2rem
  .button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid #ccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>


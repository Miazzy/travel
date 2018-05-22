<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    color $bgColor
    text-align center
</style>



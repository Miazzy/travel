<template>
  <div>
    <div class="promote">
      <h3 class="ticket-type">去哪儿推荐</h3>
      <div class="ticket-item" v-for="(item,index) of list" :key="index">
        <div class="ticket-title">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div class="ticket-side" v-if="item.children">
          <detail-list :list="item.children" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.promote
  background #fff
  margin-bottom 0.2rem
  padding-left 0.2rem
  .ticket-type
    background url('../../../assets/promote.png')
    background-repeat no-repeat
    background-size 0.36rem 0.36rem
    background-position 0 center
    text-indent 0.36rem
    margin-bottom -0.02rem
    padding 0 0.2rem
    border-bottom 1px solid #ddd
    height 0.88rem
    color #333
    font-size 0.32rem
    line-height 0.88rem
  .ticket-item
    .ticket-title
      line-height 0.8rem
      font-size 0.32rem
      padding 0 0.2rem
      border-bottom 1px solid #eee
      .item-title-icon
        position relative
        left 0.06rem
        top 0.06rem
        display inline-block
        width 0.36rem
        height 0.36rem
        background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
        margin-right 0.1rem
        background-size 0.4rem 3rem
    .ticket-side
      padding 0 0.2rem
</style>

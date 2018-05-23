 <template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到您要搜索的城市</li>
      </ul>
    </div>
  </div>
 </template>

 <script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  }
};
</script>

 <style lang="stylus" scoped>
 @import '~style/varibles.styl'
 .search
   height 0.72rem
   padding 0 0.1rem
   background $bgColor
   .search-text
     width 100%
     height 0.62rem
     line-height 0.62rem
     padding 0 0.1rem
     text-align center
     border-radius 0.06rem
     box-sizing border-box
     color #666
 .search-content
   position absolute
   top 1.58rem
   left 0
   right 0
   bottom 0
   background #eee
   overflow hidden
   z-index 1
   .search-item
     line-height 0.62rem
     padding-left 0.2rem
     background #fff
     color #666
</style>



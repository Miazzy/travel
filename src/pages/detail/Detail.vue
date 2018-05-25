<template>
  <div>
    <banner :name="name" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <detail-header />
    <split />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import DetailHeader from "./components/Header";
import Split from "./components/Split";
import DetailList from "./components/List";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    Banner,
    DetailHeader,
    Split,
    DetailList
  },
  data() {
    return {
      name: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          res = res.data.data;
          if (res) {
            this.name = res.sightName;
            this.bannerImg = res.bannerImg;
            this.gallaryImgs = res.gallaryImgs;
            this.list = res.categoryList;
          }
        });
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>



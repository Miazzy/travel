<template>
  <div>
    <banner />
    <detail-header />
  </div>
</template>

<script>
import Banner from "./components/Banner";
import DetailHeader from "./components/Header";

export default {
  name: "Detail",
  components: {
    Banner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
</style>



<template>
  <div>
    <city-header />
    <city-search />
    <city-list :cities="cities" :hot="hotCities" />
    <city-alphabet :cities="cities" />
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(res => {
        res = res.data.data;
        if (res) {
          this.cities = res.cities;
          this.hotCities = res.hotCities;
        }
      });
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>



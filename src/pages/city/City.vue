<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :cities="cities" :hot="hotCities" :letter="letter" />
    <city-alphabet :cities="cities" @change="ChangeLetter" />
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
      hotCities: [],
      letter: ""
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
    },
    ChangeLetter(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>



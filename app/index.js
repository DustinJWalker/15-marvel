import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const apiKey = '75c75dd18f3a6238670e95865511ad5e';

const app = new Vue({
  el: '.app',
  data() {
    return {
      seriesData: null,
      characters: null,
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey=${apiKey}`)
        .then((r) => r.json())
        .then((data) => {
          this.seriesData = data.data.results[0];
          this.searchCharacters(this.seriesData);
        });
    },

    searchCharacters(series) {
      fetch(`http://gateway.marvel.com/v1/public/series/${series.id}/characters?apikey=${apiKey}`)
        .then((r) => r.json())
        .then((data) => {
          this.characters = data.data.results;
        });
    },

    searchComics(id) {
      fetch(`http://gateway.marvel.com/v1/public/series/${series.id}/comics?apikey=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
        this.comics = data.data.results;
      });
    },
  },
});

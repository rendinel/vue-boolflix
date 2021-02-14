
new Vue({
  el: '#app',
  data: {
    results:[],
    filmList:[],
    tvSeriesList:[],
    userSearch:'',
    availableFlags: ['it', 'en','de','ja'],
  },
  methods:{
    search() {
      this.results = [];
      this.searchFilm();
      this.searchTvseries();
    },
    searchFilm() {
      const self = this;
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=0071f8ee5cbfa7dc991e243699c56675&query=' + self.userSearch)
        .then(function(result) {
          const filmList = result.data.results;

          self.filmList = filmList;
          self.results = [...self.filmList,...self.results]
          self.userSearch = '';

        });
    },
    searchTvseries(){
      const self = this;
      axios
        .get('https://api.themoviedb.org/3/search/tv?api_key=0071f8ee5cbfa7dc991e243699c56675&query=' + self.userSearch)
        .then(function(result) {
          const tvSeriesList = result.data.results;

          self.tvSeriesList = tvSeriesList;
          self.results = [...self.results, ...self.tvSeriesList];
          self.userSearch = '';

        });
    },
    getVote(vote) {
      return parseInt(vote / 2);
    },
    toggleClass(el){
      el.className = "inactive"
    }
  },

})
Vue.config.devtools = true

import Vue from 'vue';
import Vuex from 'vuex';
import MovieService from './services/MovieService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: 'hello world',
    movies: [],
    genres: [],
    savedMovies: [],
    selectedGenre: null,
    pages: 7,
    currentPage: 1,
    currentSection: 'discover',
  },

  actions: {
    fetchMovies(context, page = 1) {
      MovieService.getMovies({
        page,
        genre: context.state.selectedGenre,
      })
        .then(response => {
          context.commit('setMovies', response.data)
        })
    },

    fetchGenres(context) {
      MovieService.getGenres()
        .then(response => {
          context.commit('setGenres', response.data)
        })
    },

    fetchByGenre(context, genre) {
      context.commit('setSelectedGenre', genre)
      context.dispatch('fetchMovies')
    },

    fetchPage(context, page) {
      context.commit('setCurrentPage', page)
      context.dispatch('fetchMovies', page)
    }
  },
  
  mutations: {
    setMovies(state, moviesData) {
      state.movies = moviesData.results
    },

    setGenres(state, genresData) {
      state.genres = genresData.genres
    },

    setSelectedGenre(state, genre) {
      state.selectedGenre = genre
    },

    setCurrentPage(state, page) {
      state.currentPage = page
    },
    
    saveMovie(state, movie) {
      state.savedMovies.push(movie)
    },

    removeSavedMovie(state, movie) {
      const movieIndex = this.getters.savedMoviesIds.indexOf(movie.id)
      if (movieIndex >= 0) state.savedMovies.splice(movieIndex, 1)
    }
  },

  getters: {
    movieCards(state) {
      const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'

      return state.movies.map(movie => ({
        id: movie.id,
        image: `${imageBasePath}${movie.poster_path}`,
        title: movie.title,
        description: movie.overview,
        voteAverage: movie.vote_average,
      }))
    },

    selectedGenreName(state) {
      const genre = state.genres.filter(genre => genre.id === state.selectedGenre)

      return genre[0] ? genre[0].name : null
    },

    savedMoviesIds(state) {
      if (!state.savedMovies) return []
      return state.savedMovies.map(movie => movie.id)
    }
  }
})
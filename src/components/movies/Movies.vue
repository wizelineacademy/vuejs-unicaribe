<template>
  <div>
    <div class="container">
      <h1 class="title">Movies Backlog</h1>
    </div>

    <movie-nav/>

    <div class="container">
      <movie-filter
        v-if="isDiscover"
      />

      <div class="columns is-multiline movie-container">
        <div
          v-for="(movie, index) in movies"
          :key="index"
          class="column">
          <movie-card v-bind="movie"/>
        </div>
      </div>

      <pagination
        v-if="isDiscover"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'
import MovieNav from './MovieNav'
import Pagination from './Pagination'

export default {
  components: {
    MovieCard,
    MovieFilter,
    MovieNav,
    Pagination,
  },
  computed: {
    movies() {
      return this.$store.getters.movieCards
    },
    isDiscover() {
      return this.$store.state.currentSection === 'discover'
    }
  },
  mounted() {
    this.$store.dispatch('fetchMovies')
  }
}
</script>

<style scoped>
.movie-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

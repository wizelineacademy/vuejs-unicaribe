<template>
  <div>
    <div class="container">
      <h1 class="title">Movies</h1>
      <h2 class="subtitle">{{ message }}</h2>
    </div>

    <movie-nav/>

    <div class="container">
      <movie-filter/>

      <div class="columns movie-container">
        <div class="column">
          <movie-card :id="1"/>
        </div>

        <div class="column">
          <movie-card :id="2"/>
        </div>

        <div class="column">
          <movie-card :id="3"/>
        </div>
      </div>

      <pagination/>
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
    message() {
      return this.$store.state.hello
    }
  }
}
</script>

<style scoped>
.movie-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

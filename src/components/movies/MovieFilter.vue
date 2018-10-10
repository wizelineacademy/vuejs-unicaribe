<template>
  <div>
    <label class="title is-4">Select your genre: </label>
    <div class="dropdown" :class="{ 'is-active': filterOpen }">
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          @click="toggleFilters"
        >
          <span>{{ filterText }}</span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item" href="#"
            @click.prevent="applyFilter()">
            No filter
          </a>
          <hr class="dropdown-divider">
          <a class="dropdown-item" v-for="(genre, index) in genres"
            :key="index" href="#"
            @click.prevent="applyFilter(genre.id)"
            >
            {{ genre.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropdownFiltersOpen: false,
    }
  },
  methods: {
    toggleFilters() {
      this.dropdownFiltersOpen = !this.dropdownFiltersOpen
    },
    applyFilter(newGenre) {
      this.$store.dispatch('fetchByGenre', newGenre)
      this.toggleFilters()
    }
  },
  computed: {
    genres() {
      return this.$store.state.genres
    },
    selectedGenreName() {
      return this.$store.getters.selectedGenreName
    },
    filterText () {
      return this.selectedGenreName || 'Viewing all genres'
    },
    filterOpen () {
      return this.dropdownFiltersOpen
    }
  },
  mounted() {
    this.$store.dispatch('fetchGenres')
  }
}
</script>

<style scoped>

</style>
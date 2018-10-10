<template>
  <nav v-if="shouldShow"
    class="pagination is-centered is-rounded"
    role="navigation" aria-label="pagination"
  >
    <!-- prev arrow -->
    <a class="pagination-previous" v-if="!isAtFirstPage"
      @click.prevent="handleChangedPage(currentPage - 1)"
    >Previous</a>

    <!-- next arrow -->
    <a class="pagination-next" v-if="!isAtLastPage"
      @click.prevent="handleChangedPage(currentPage + 1)"
    >Next page</a>

    <!-- pages -->
    <ul class="pagination-list">
      <li v-for="page in pagesToShow" :key="page">
        <a class="pagination-link" :class="{ 'is-current': page === currentPage }"
          @click.prevent="handleChangedPage(page)"
        >{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxNumberOfPages: {
      type: Number,
      default: 7,
    }
  },
  data() {
    return {
    }
  },

  computed: {
    shouldShow() {
      return this.pages > 1
    },
    isAtFirstPage() {
      return this.currentPage === 1
    },
    isAtLastPage() {
      return this.currentPage === this.pages
    },
    pagesToShow () {
      const halfMaxPages = Math.floor(this.maxNumberOfPages/2)
      let pageArray = []
      let pageCounter = Math.max(this.currentPage-halfMaxPages, 1)
      while (pageArray.length < this.maxNumberOfPages &&
        pageCounter <= this.pages) {
        pageArray.push(pageCounter)
        pageCounter++
      }
      return pageArray
    },
    currentPage() {
      return this.$store.state.currentPage
    },
    pages() {
      return this.$store.state.pages
    }
  },
  methods: {
    handleChangedPage(page) {
      this.$store.dispatch('fetchPage', page)
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>

</style>
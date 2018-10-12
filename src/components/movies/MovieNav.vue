<template>
  <div class="tabs">
    <ul>
      <li :class="{ 'is-active' : section == 'discover' }">
        <a @click.prevent="changeSection('discover')">Discover</a>
      </li>
      <li :class="{ 'is-active' : section == 'backlog' }">
        <a @click.prevent="changeSection('backlog')">Backlog</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    changeSection(newSection) {
      this.$store.commit('setSection', newSection)
    }
  },
  computed: {
    section() {
      return this.$store.state.currentSection
    }
  }
}
</script>

<style scoped>

</style>
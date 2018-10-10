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
  data() {
    return {
      section: 'discover'
    }
  },
  methods: {
    // eslint-disable-next-line
    changeSection(newSection) {
      // TODO: Change section
    }
  }
}
</script>

<style scoped>

</style>
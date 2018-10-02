<template>
  <div>
    <h1 class="title">Movies</h1>
    <h2 class="subtitle">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.hello
    }
  }
}
</script>

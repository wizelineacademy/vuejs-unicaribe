<template>
  <router-link
    :to="to"
    active-class="is-active"
    class="nav-item"
    exact>
    <a class="navbar-item" href="#">
      {{ label }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  }
}
</script>

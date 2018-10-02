<template>
  <div class="navbar-menu">
    <div class="navbar-start">
      <navbar-link to="/" label="Todo App" />
      <navbar-link to="/movies" label="Movies" />
    </div>
  </div>
</template>

<script>
import NavbarLink from './NavbarLink';

export default {
  components: {
    NavbarLink,
  }
}
</script>


<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <figure class="image is-2by3">
            <img
              :src="image"
            />
          </figure>
        </div>

        <div class="column">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">{{ title }}</p>
            </div>
          </div>

          <div class="content">
            <p class="is-size-7">{{ description }}</p>
            <small>{{ movieTime }}</small>
          </div>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item">More info</a>
      <a href="#" class="card-footer-item">Add to ⭐️</a>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/jMBTJQiHAyGlZR05J2sq5coA6ew.jpg',
        title: 'Deserunt amet sit eiusmod esse.',
        description: 'Nulla exercitation exercitation laborum voluptate irure anim do officia minim anim id. Consequat sunt magna voluptate consectetur eu laborum do labore laboris. Duis proident eu aliquip sunt enim amet officia reprehenderit veniam. Dolore officia ea laborum eiusmod pariatur ea sit sunt.',
        rank: 67,
        movieTime: 'Aug 23th, 2018',
      }
    }
  }
</script>

<style scoped>
</style>
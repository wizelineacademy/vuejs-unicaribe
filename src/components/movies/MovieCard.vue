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
            <p class="is-size-7">{{ description | maxlength }}</p>
            <!-- <small>{{ movieTime }}</small> -->
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
      }
    },

    props: {
      id: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        default: 'http://lorempixel.com/370/556',
      },
      title: {
        type: String,
        default: 'Movie title',
      },
      description: {
        type: String,
        default: 'Some description',
      },
      voteAverage: {
        type: Number,
        default: -1,
      },
    },

    filters: {
      maxlength: (text) => {
        if (!text) return ''

        return `${text.toString().slice(0, 200)} ...`
      }
    }
  }
</script>

<style scoped>
.card {
  min-width: 400px;
  min-height: 343px;
}
</style>
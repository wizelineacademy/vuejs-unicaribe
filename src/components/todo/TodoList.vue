<template>
  <div>
    <h2 class="subtitle">{{title}}</h2>
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
        >
          {{ task.description }}
          <button 
            class="button"
            :class="{ 'is-warning': completed, 'is-success': !completed}"
            @click="toggle(task)">
            Mark as {{completed ? 'pending' : 'completed'}}
          </button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    completed: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    }
  },

  methods: {
    toggle(item) {
      this.$emit('toggle', item);
    }
  }
}
</script>


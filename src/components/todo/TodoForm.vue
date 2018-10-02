<template>
  <div>
    <h2 class="subtitle">Create new task</h2>

      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" v-model="newTask" />
        </div>
        <div class="control">
          <a class="button is-primary" @click="addTask">add</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
    }
  },

  methods: {
    addTask() {
      this.$emit('addTask', this.newTask);
      this.newTask = '';
    }
  }
}
</script>

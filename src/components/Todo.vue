<template>
  <div id="todo-list-component">
    <h1>Welcome {{name || 'guest'}}</h1>
    <input type="text" v-model="name">

    <hr>

    <div class="container">
      <h2 class="subtitle">Create new task</h2>

      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" v-model="newTask" />
        </div>
        <div class="control">
          <a class="button is-primary" v-on:click="addTask">add</a>
        </div>
      </div>

      <h2 class="subtitle">Pending tasks</h2>
      <ul>
        <li
          v-for="(task, index) in pendingTasks"
          v-bind:key="index"
        >
          {{ task.description }}
          <button  class="button is-success" v-on:click="toggle(task)">Mark as completed</button>
        </li>
      </ul>

      <h2 class="subtitle">Completed</h2>
      <ul>
        <li
          v-for="(task, index) in completedTasks"
          v-bind:key="index"
        >
          {{ task.description }}
          <button  class="button is-warning" v-on:click="toggle(task)">Mark as pending</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jonathan',
      tasks: [
        { description: 'Tarea 1', isFinished: true },
        { description: 'Tarea 2', isFinished: false },
        { description: 'Tarea 3', isFinished: false },
        { description: 'Tarea 4', isFinished: false },
        { description: 'Tarea 5', isFinished: false },
      ],
      newTask: '',
    }
  },

  methods: {
    addTask() {
      if (!this.newTask) return;

      const taskItem = {
        description: this.newTask,
        isFinished: false,
      }

      this.tasks.push(taskItem);
      this.newTask = '';
    },

    toggle(taskItem) {
      taskItem.isFinished = !taskItem.isFinished;
    }
  },

  computed: {
    pendingTasks () {
      return this.tasks.filter(item => !item.isFinished);
    },

    completedTasks () {
      return this.tasks.filter(item => item.isFinished);
    }
  }
}
</script>

<style>
li {
  margin: 10px;
}

.field.has-addons {
  justify-content: center;
}
</style>


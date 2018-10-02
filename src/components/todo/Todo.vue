<template>
  <div id="todo-list-component">
    <h1>Welcome {{name || 'guest'}}</h1>
    <input type="text" v-model="name">

    <hr>

    <div class="container">
      <todo-form
        @addTask="addTask" />

      <todo-list
        @toggle="toggle"
        title="pending tasks"
        :tasks="pendingTasks" />

      <todo-list
        @toggle="toggle"
        title="completed"
        :completed="true"
        :tasks="completedTasks" />
    </div>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      name: '',
      tasks: [
        { description: 'Tarea 1', isFinished: true },
        { description: 'Tarea 2', isFinished: false },
        { description: 'Tarea 3', isFinished: false },
        { description: 'Tarea 4', isFinished: false },
        { description: 'Tarea 5', isFinished: false },
      ],
    }
  },

  methods: {
    addTask(newTask) {
      if (!newTask) return;

      const taskItem = {
        description: newTask,
        isFinished: false,
      }

      this.tasks.push(taskItem);
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


<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ remaining }}</strong> {{ pluralize }} left
    </span>
    <ul class="filters">
      <li><a href="#/all" @click="changeVisibility('all')"  :class="{ selected: visibility == 'all' }">All</a></li>
      <li><a href="#/active" @click="changeVisibility('active')" :class="{ selected: visibility == 'active' }">Active</a></li>
      <li><a href="#/completed" @click="changeVisibility('completed')" :class="{ selected: visibility == 'completed' }">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
      Clear completed
    </button>
  </footer>  
</template>

<script>
export default {
  methods: {
    changeVisibility(type) {
      this.$emit("changeVisibility", type);
    },
    removeCompleted() {
      this.$emit("removeCompleted");
    }
  },
  props: ["todos", "remaining", "pluralize", "visibility"]
};
</script>

<style>
</style>
 
<template>
  <header class="header">
      <input class="new-todo"  v-model="newTodo" @keyup.enter="addTodo"   autofocus autocomplete="off" placeholder="What needs to be done?">
  </header>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      const memo = this.newTodo && this.newTodo.trim();
      if (!memo) return;
      const data = {
        memo: this.newTodo,
        completed: false
      };
      this.$emit("getAddTodo", data);
      this.newTodo = "";
    }
  }
};
</script>

<style>
</style>

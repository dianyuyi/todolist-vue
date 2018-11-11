<template>
  <section class="main">      
    <ul class="todo-list">
      <li v-for="(todo,index) in filteredTodos" class="todo" :key="index"
        :class="{ completed: todo.completed, editing: todo == editedTodo }"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed">
          <label @dblclick="editTodo(todo)">{{ todo.memo }}</label>
          <button class="destroy" @click="removeTodo(index)"></button>
        </div>
        <input class="edit" type="text"
          v-model="todo.memo"
          v-focus="todo == editedTodo"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        >            
      </li>
    </ul>
  </section>  
</template>

<script>
export default {
  props: ["todos", "editedTodo", "visibility"],
  methods: {
    editTodo(todo) {
      this.$emit("editTodo", todo);
    },
    removeTodo(index) {
      this.$emit("removeTodo", index);
    },
    doneEdit(todo) {
      this.$emit("doneEdit", todo);
    },
    cancelEdit(todo) {
      this.$emit("cancelEdit", todo);
    }
  },
  computed: {
    filteredTodos() {
      let result;
      switch (this.visibility) {
        case "all":
          result = this.todos;
          break;
        case "active":
          result = this.todos.filter(item => !item.completed);
          break;
        case "completed":
          result = this.todos.filter(item => item.completed);
          break;
      }
      return result;
    }
  }
};
</script>

<style>
</style>
 
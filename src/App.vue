<template>
  <section class="todoapp">
    <m-header  @getAddTodo="addTodo" />
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
            @blur="doneEdit(todo,index)"
            @keyup.enter="doneEdit(todo,index)"
            @keyup.esc="cancelEdit(todo)">            
        </li>
      </ul>
    </section>
    <m-footer 
      v-show="todos.length"
      :todos="todos" 
      :remaining="remaining" 
      :pluralize="pluralize" 
      :visibility="visibility"
      @changeVisibility="changeVisibility"
      @removeCompleted="removeCompleted" 
    />
  </section> 
</template>

<script>
import { getStorage, setStorage } from "@/utils/localStorage";
import MHeader from "@/components/m-header";
import MFooter from "@/components/m-footer";
export default {
  created() {
    this.loadTodos();
  },
  data() {
    return {
      todos: [],
      editedTodo: null,
      visibility: "all"
    };
  },
  components: {
    MHeader,
    MFooter
  },
  methods: {
    loadTodos() {
      this.todos = JSON.parse(getStorage("todos")) || [];
    },
    addTodo(data) {
      this.todos.push(data);
      this.saveToLocalStorage();
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    },
    editTodo(todo) {
      this.beforeEditCache = todo.memo;
      this.editedTodo = todo;
    },
    doneEdit(todo, index) {
      if (!this.editedTodo) return;
      this.editedTodo = null;
      todo.memo = todo.memo.trim();
      if (!todo.memo) this.removeTodo(todo, index);
      this.saveToLocalStorage();
    },
    cancelEdit(todo) {
      this.editedTodo = null;
      todo.memo = this.beforeEditCache;
    },
    changeVisibility(type) {
      this.visibility = type;
    },
    removeCompleted() {
      this.todos = this.todos.filter(item => !item.completed);
    },
    saveToLocalStorage() {
      setStorage("todos", this.todos);
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
    },
    remaining() {
      return this.todos.filter(item => !item.completed).length;
    },
    pluralize() {
      return this.todos.length === 1 ? "item" : "items";
    }
  },
  directives: {
    focus(el, binding) {
      if (binding.value) el.focus();
    }
  }
};
</script>

<style>
</style>

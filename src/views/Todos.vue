<template>
    <h1>Todo App</h1>
  <AddTodo
    @add-todo="addTodo"
  />
  <hr>
  <TodoList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
  />
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'tod1', completed: false},
        {id: 2, title: 'tod2', completed: false},
        {id: 3, title: 'tod3', completed: false},
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  .then(response => response.json())
  .then(json => this.todos = json)
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !==id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>
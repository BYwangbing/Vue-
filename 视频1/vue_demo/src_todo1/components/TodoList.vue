<template>
    <div>
      <ul class="todo-main">
        <TodoItem v-for="(todo, index) in parentTodoData" :key="index"
                  :subTodoData="todo" :index="index" :deleteTodo="delete_Todo"></TodoItem>
      </ul>
    </div>
</template>

<script type="es6">
  import TodoItem from './TodoItem'
  export default {
    props: {
      parentTodoData: Array,
      delete_Todo: Function
    },
    components: {
      TodoItem
    }
  }
</script>

<style scoped>

</style>

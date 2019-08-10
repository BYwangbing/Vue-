<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="inputTodo" @keyup.enter="add"/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              inputTodo: ''
            }
        },
        props: {
          add_Todo: Function
        },
        methods: {
          add() {
            const inputTodo = this.inputTodo.trim();
            if(!inputTodo){
              alert('请输入任务名称！');
              return
            }
            // 封装一个todo对象
            const todo = {
              title: inputTodo,
              complete: false
            };
            // 添加 显示
            this.add_Todo(todo);
            this.inputTodo = ''
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

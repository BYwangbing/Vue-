<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodeHeader @add_Todo="add_Todo"></TodeHeader>
        <TodeHeader ref="header"></TodeHeader>
        <TodeList :parentTodoData="todo"></TodeList>
        <Tode-footer :todo="todo" :selectAll="selectAll" :deleteCompleteTodo="deleteCompleteTodo"></Tode-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import TodeHeader from './components/TodoHeader'
    import TodeList from './components/TodoList'
    import TodeFooter from './components/TodoFooter'
    export default {
        data() {
            return {
                todo: JSON.parse(localStorage.getItem('todo_key') || '[]')  // 读取localStorage保存的数据
            }
        },
        mounted() {
            // 绑定自定义事件(add_Todo)监听
            // this.$on('add_Todo',  this.add_Todo) //绑定监听的目标不对
            this.$refs.header.$on('add_Todo',  this.add_Todo)
            // 订阅消息(delete_Todo)
            PubSub.subscribe('delete_Todo', (msg, index) => {
                this.delete_Todo(index)
            })
        },
        components: {
            TodeHeader,
            TodeList,
            TodeFooter,
        },
        methods: {
            add_Todo(args) {
                this.todo.unshift(args);
            },
            delete_Todo(index) {
                this.todo.splice(index, 1);
            },
            // 删除所有已完成的
            deleteCompleteTodo() {
                this.todo = this.todo.filter(todo => !todo.complete)
            },
            // 全选/全不选
            selectAll(isSelectAll) {
                this.todo.forEach(todo => todo.complete = isSelectAll)
            }
        },
        watch: {
            todo: {
                deep: true,// 深度监视
                handler: function (value) {
                    // 将数据(json)保存到localStorage
                    localStorage.setItem('todo_key', JSON.stringify(value))
                }
            }
        }
    }
</script>

<style>

</style>

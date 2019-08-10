<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodeHeader :add_Todo="add_Todo"></TodeHeader>
        <TodeList :parentTodoData="todo" :delete_Todo="delete_Todo"></TodeList>
        <Tode-footer :todo="todo" :selectAll="selectAll" :deleteCompleteTodo="deleteCompleteTodo"></Tode-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import TodeHeader from './components/TodoHeader'
    import TodeList from './components/TodoList'
    import TodeFooter from './components/TodoFooter'
    export default {
        data() {
            return {
                // todo: [
                //     { title: '吃饭', complete: false },
                //     { title: '学习', complete: true },
                //     { title: '睡觉', complete: false },
                // ]
                todo: JSON.parse(localStorage.getItem('todo_key') || '[]')  // 读取localStorage保存的数据
            }
        },
        components: {
            TodeHeader,
            TodeList,
            TodeFooter,
        },
        // created() {
        //     this.loadTodo();
        // },
        methods: {
            // loadTodo(){
            //     // 从本地的 localStorage 中，加载评论列表
            //     var list = JSON.parse(localStorage.getItem('todo_key' || '[]'));
            //     this.todo = list
            // },
            add_Todo(title) {
                this.todo.unshift(title);
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

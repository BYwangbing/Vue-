<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodeHeader @add_Todo="add_Todo"></TodeHeader>
        <TodeHeader ref="header"></TodeHeader>
        <TodeList :parentTodoData="todo"></TodeList>
<!--        <Tode-footer :todo="todo" :selectAll="selectAll" :deleteCompleteTodo="deleteCompleteTodo"></Tode-footer>-->
          <Tode-footer>
              <input slot="checkAll" type="checkbox" v-model="isAllCheck"/>
              <span slot="complete_size">已完成 {{ completeSize }} / 全部{{ todo.length }}</span>
              <button slot="delete_completed" class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
          </Tode-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import TodeHeader from './components/TodoHeader'
    import TodeList from './components/TodoList'
    import TodeFooter from './components/TodoFooter'
    import storageUtils from './utils/storageUtils'
    export default {
        components: {
            TodeHeader,
            TodeList,
            TodeFooter,
        },
        data() {
            return {
                // todo: JSON.parse(localStorage.getItem('todo_key') || '[]')  // 读取localStorage保存的数据
                todo: storageUtils.readTodo()
            }
        },
        mounted() {
            // 绑定自定义事件(add_Todo)监听
            // this.$on('add_Todo',  this.add_Todo) //绑定监听的目标不对
            this.$refs.header.$on('add_Todo',  this.add_Todo);

            // 订阅消息(delete_Todo)
            PubSub.subscribe('delete_Todo', (msg, index) => {
                this.delete_Todo(index)
            })
        },
        // computed属性在页面中使用 {{方法名}} 来显示计算的结果
        computed: {
            completeSize() {
                return this.todo.reduce((preTotal,todo) => preTotal + (todo.complete?1:0), 0)
            },
            isAllCheck: {
                // 决定是否勾选
                get() {
                    return this.completeSize === this.todo.length && this.completeSize > 0
                },
                // 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
                set(value) {
                    this.selectAll(value)
                }
            }
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
            },
            // 删除所有已完成的
            deleteAllCompleted(){
                if (window.confirm('确定清除已完成的吗')) {
                    this.deleteCompleteTodo();
                }
            }
        },
        watch: {
            todo: {
                deep: true,// 深度监视
                // handler: function (value) {
                //     // 将数据(json)保存到localStorage
                //     // localStorage.setItem('todo_key', JSON.stringify(value))
                //     storageUtils.saveTodo(value)
                // },
                handler: storageUtils.saveTodo
                /*handler: function  (todo) {
                    localStorage.setItem(TODO_KEY, JSON.stringify(todo))
                }*/
            }
        }
    }
</script>

<style>

</style>

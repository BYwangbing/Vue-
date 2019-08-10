<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成 {{ completeSize }}</span> / 全部{{ todo.length }}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            todo: Array,
            selectAll: Function,
            deleteCompleteTodo: Function
        },
        methods: {
            deleteAllCompleted(){
                if (window.confirm('确定清除已完成的吗')) {
                    this.deleteCompleteTodo();
                }
            }
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

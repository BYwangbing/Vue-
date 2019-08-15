<template>
    <div class="todo-header">
        <label>
            <input type="text" placeholder="请输入你的任务名称，按回车键确认"
                   v-model="inputTodo" @keyup.enter="add"/>
        </label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputTodo: '' // 不需要使用vuex管理(只有当前组件使用)
            }
        },
        methods: {
            add() {
                const inputTodo = this.inputTodo.trim();
                if (!inputTodo) {
                    alert('请输入任务名称！');
                    return
                }
                // 封装一个todo对象
                const todo = {
                    title: inputTodo,
                    complete: false
                };
                // 添加 显示
                this.$store.dispatch('add_tod', todo);
                this.inputTodo = ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

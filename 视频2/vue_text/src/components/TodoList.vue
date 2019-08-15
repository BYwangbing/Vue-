<template>
    <div>
        <ul class="todo-main">
            <TodoItem v-for="(todo, index) in todo" :key="index"
                      :subTodoData="todo" :index="index"></TodoItem>
        </ul>
    </div>
</template>

<script type="es6">
    import TodoItem from './TodoItem'
    import { mapState } from 'vuex'
    import storageUtils from '../utils/storageUtils'
    export default {
        components: { TodoItem },
        computed: {
            ...mapState(['todo'])
        },
        // 监视 todo 的所有变化
        watch: {
            todo: {
                deep: true,
                handler: storageUtils.saveTodo
            //    保存todo 到 localStorage
            }
        }
    }
</script>

<style scoped>

</style>

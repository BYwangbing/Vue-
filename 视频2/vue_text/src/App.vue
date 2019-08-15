<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodeHeader></TodeHeader>
        <TodeList></TodeList>
        <Tode-footer></Tode-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import TodeHeader from './components/TodoHeader'
    import TodeList from './components/TodoList'
    import TodeFooter from './components/TodoFooter'
    export default {

        mounted() {
            // 发送命令给actions: 异步获取保存TODO数据并显示
            this.$store.dispatch('reqTodo')
        },

        components: {
            TodeHeader,
            TodeList,
            TodeFooter,
        },
    }
</script>

<style>

</style>

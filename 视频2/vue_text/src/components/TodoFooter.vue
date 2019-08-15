<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成 {{ completeSize }}</span> / 全部{{ totalSize }}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        methods: {
            deleteAllCompleted(){
                if (window.confirm('确定清除已完成的吗')) {
                    this.$store.dispatch('deleteCompleteTodo')
                }
            }
        },
        computed: {
            ...mapGetters(['totalSize', 'completeSize']),
            isAllCheck: {
                // 决定是否勾选
                get() {
                    return this.$store.getters.isAllSelect
                },
                // 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
                set(value) {
                    // this.selectAll(value)
                    this.$store.dispatch('select_All', value)
                }
            }
        }
    }
</script>
<style scoped>

</style>

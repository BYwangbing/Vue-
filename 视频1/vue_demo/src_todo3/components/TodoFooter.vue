<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllCheck"/>-->
        <slot name="checkAll"></slot>
    </label>
    <span>
<!--      <span>已完成 {{ completeSize }} / 全部{{ todo.length }}</span> -->
        <slot name="complete_size"></slot>
    </span>
<!--    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>-->
      <slot name="delete_completed"></slot>
  </div>
</template>

<script>
    export default {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

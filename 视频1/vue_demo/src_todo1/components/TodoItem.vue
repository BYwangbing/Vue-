<template>
    <div>
      <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
        <label>
          <input type="checkbox" v-model="subTodoData.complete"/>
          <span>{{ subTodoData.title }}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
      </li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              bgColor: 'white',
              isShow: false
            }
        },
        props: {
          subTodoData: Object,
          index: Number,
          deleteTodo: Function
        },
      methods: {
        handleEnter (isEnter) {
          if(isEnter) { // 进入
            this.bgColor = '#EFEFEF';
            this.isShow = true
          } else { // 离开
            this.bgColor = '#fff';
            this.isShow = false
          }
        },
        deleteItem() {
          const { deleteTodo, index, subTodoData} = this;
          if(window.confirm(`确定要删除${subTodoData.title}的任务吗`)) {
            deleteTodo(index);
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

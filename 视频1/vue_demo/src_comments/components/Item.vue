<template>
  <div>
    <li class="list-group-item">
      <span class="badge" @click="deleteComment">删除</span>
      <span class="badge">评论人：{{ subData.name }}</span>
      {{ subData.content }}
    </li>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      subData: Object,
      subMethods: Function,
      index: Number
    },
    methods: {
      deleteComment() {
        const {subData, index, subMethods} = this;
        if(window.confirm(`确定删除${subData.name}的评论吗`)) {
          subMethods(index)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <img src="assets/logo.png" alt="logo" class="logo">
    <HelloWord></HelloWord>
    <Add :parentMethods="addComment"></Add>
<!--    <Add @fun="loadComments"></Add>-->
    <List :parentData="comments" :parentDel="delComment"></List>
  </div>
</template>

<script>
/* eslint-disable no-new */
import HelloWord from './components/HelloWorld.vue'
import List from './components/List'
import Add from './components/Add'
export default {
  data () {
    return {
      comments: [
        { name: 'BOB', content: '我想带一人回云深不知处，带回去，藏起来' },
        { name: 'Tom', content: '我想带一人回云深不知处，带回去，藏起来' },
        { name: 'Job', content: '我想带一人回云深不知处，带回去，藏起来' }
      ]
    }
  },
  methods: {
    // 添加评论
    addComment(comment) {
      this.comments.unshift(comment);
    },
    // loadComments(comment) {
    //   this.comments.unshift(comment);
    // }
    // 删除评论
    delComment(index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    HelloWord,
    List,
    Add
  }
}
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>

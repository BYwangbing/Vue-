<template>
  <div>
    <div class="form-group">
      <label>评论人：</label>
      <input type="text" class="form-control" v-model="name"/>
    </div>

    <div class="form-group">
      <label>评论内容：</label>
      <textarea class="form-control" v-model="content"></textarea>
    </div>

    <div class="form-group">
      <input type="button" value="发表评论" class="btn btn-primary" @click="postComment">
<!--      <input type="button" value="发表评论" class="btn btn-primary" @click="addComment">-->
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        name: '',
        content: '',
      }
    },
    props: {
      parentMethods: {
        type: Function,
        required: true
      }
    },
    methods: {
      postComment(){
        const name = this.name.trim();
        const content = this.content.trim();
        if (!name || !content) {
          alert('姓名或内容不能为空！');
          return
        }
        var comment = {
          name,
          content
        };
        this.parentMethods(comment);
        this.name = this.content = ''
      },
      // addComment(){
      //   const _name = this.name.trim();
      //   const _content = this.content.trim();
      //   if (!_name || !_content) {
      //     alert('姓名或内容不能为空！');
      //     return
      //   }
      //   var comment = {
      //     _name,
      //     _content
      //   };
      //   this.$emit('func');
      //   this._name = this._content = ''
      // }
    }
  }
</script>

<style scope>

</style>

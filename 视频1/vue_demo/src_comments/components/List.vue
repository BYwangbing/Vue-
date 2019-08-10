<template>
  <div>
    <ul class="list-group">
      <Item v-for="(comment, index) in parentData" :key="index" :subData="comment" :index="index"
      :subMethods="parentDel"></Item>
    </ul>

  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    data() {
      return {}
    },
    props: ['parentData', 'parentDel'],
    components: { Item }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

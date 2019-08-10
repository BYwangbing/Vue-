<template>
  <div class="container">
      <UserSearch></UserSearch>
      <UserMain></UserMain>
  </div>
</template>

<script>
    import Search from './components/Search'
    import Main from './components/Main'
    export default {
        components: {
            UserSearch: Search,
            UserMain: Main
        }
    }
</script>

<style>

</style>

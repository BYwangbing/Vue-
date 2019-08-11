<template>
    <div>
        <h2>Home组件</h2>
        <div>
            <ul class="nav nav-tabs">
                <li><router-link to="/home/news">News</router-link></li>
                <li><router-link to="/home/messages">Message</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>

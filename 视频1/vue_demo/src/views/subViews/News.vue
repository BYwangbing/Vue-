<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(news, index) in newsArr" :key="index">{{ news }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsArr: ['news_001', 'news_002','news_003', 'news_004']
            }
        }
    }
</script>

<style scoped>

</style>

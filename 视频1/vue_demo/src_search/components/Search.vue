<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" style="width: 50%; display: inline-block;" v-model="searchName"
                       class="form-control" placeholder="enter the name you search"/>
                <button class="btn btn-success" @click="search">Search</button>
            </div>
        </section>
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
        data() {
            return {
                searchName: '',
            }
        },
        methods: {
            search() {
                const searchName = this.searchName.trim();
                if(searchName) {
                    // 发布一个search的消息
                    PubSub.publish('search', searchName)
                }
            }
        }
    }
</script>

<style scoped>

</style>

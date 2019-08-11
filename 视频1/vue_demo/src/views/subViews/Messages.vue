<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="m in messages" :key="m.id">
                <router-link :to="`/home/messages/messageDetails/${m.id}`">{{ m.title }}</router-link>
                <button @click="pushShow(m.id)">push查看</button>
                <button @click="replaceShow(m.id)">replace查看</button>
            </li>
        </ul>
        <button @click="$router.back()" class="btn btn-success">$router.back()返回</button>
        <button @click="$router.go(-1)" class="btn btn-success">$router.go(-1)返回</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                messages: [],
            }
        },
        mounted() {
            setTimeout(() => {
                const message = [
                    { id: 1, title: 'messages_001' },
                    { id: 2, title: 'messages_002' },
                    { id: 5, title: 'messages_005' },
                    { id: 7, title: 'messages_007' },
                ];
                this.messages = message;
            }, 1000)
        },
        methods: {
            pushShow(id) {
                this.$router.push(`/home/messages/messageDetails/${id}`)
            },
            replaceShow(id) {
                this.$router.replace(`/home/messages/messageDetails/${id}`)
            }

        }
    }
</script>

<style scope>

</style>
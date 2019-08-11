<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="m in messages" :key="m.id">
                <router-link :to="`/home/messages/messageDetails/${m.id}`">{{ m.title }}</router-link>
            </li>
        </ul>
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
        }
    }
</script>

<style scope>

</style>
<template>
    <div>
        <h3>ID: {{ $route.params.id }}</h3>
        <ul>
            <li>id: {{ $route.params.id }}   </li>
            <li>title:  {{ messageDetail.title }}</li>
            <li>content:  {{ messageDetail.content }}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                messageDetail: {
                    id: '',
                    title: '',
                    content:''
                }
            }
        },
        mounted() {
            setTimeout(() => {
                const allDetailMessages = [
                    { id: 1, title: 'messages_001', content:'messages_001 content...' },
                    { id: 2, title: 'messages_002', content:'messages_002 content...' },
                    { id: 5, title: 'messages_005', content:'messages_005 content...' },
                    { id: 7, title: 'messages_007', content:'messages_007 content...' },
                ];
                this.allDetailMessages = allDetailMessages;
                const id = this.$route.params.id*1;
                this.messageDetail = allDetailMessages.find( detail => detail.id === id);
            }, 1000)
        },
        watch: {
            $route: function (value) {
                const id = value.params.id*1;
                this.messageDetail = this.allDetailMessages.find( detail => detail.id === id);
            }
        }
    }
</script>

<style scoped>

</style>

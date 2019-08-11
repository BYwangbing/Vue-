<template>
    <div>
        <h2>About组件</h2>
        <p>{{ msg }}</p>
        <label>
            <input type="text">
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            msg: String
        }
    }
</script>

<style scope>

</style>
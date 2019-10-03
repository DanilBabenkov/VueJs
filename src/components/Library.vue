<template>
    <div class="about">
        <h1>Library</h1>
        <router-link :to="{name:'library1'}">Library1</router-link> |
        <router-link to="/library2">Library2</router-link>
    </div>
</template>

<script>
    export default {
        name: "Library"
    }
</script>

<style scoped>

</style>
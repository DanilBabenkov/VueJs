<template>
    <div>
        <span v-if="seen === 'Данил'">Данил</span>
        <span v-else-if="seen === 'Диана'">Диана</span>
        <button v-on:click="reverseMessage">Парень</button>
        <button v-on:click="reverseMessage1">Девушка</button>
    </div>
</template>

<script>
    export default {
        name: "Gender",
        data() {
            return {
                seen: false
            }
        },
         methods: {
        reverseMessage: function () {
            this.seen = 'Данил'
        },
             reverseMessage1: function () {
                 this.seen = 'Диана'
             }
    }
    }
</script>

<style scoped>

</style>
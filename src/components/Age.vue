<template>
    <div >
        <li v-for="item in items" >
            <a v-if="seen">
            {{ item.message }}
    </a>
        </li>
        <button v-on:click="reverseMessage">Показать возраст учеников</button>
    </div>
</template>

<script>
    export default {
        name: "Age",
        data() {
            return {
                seen: true,
            items: [
                { message: 'Данил:20' },
                { message: 'Диана:19' },
                { message: 'Леха:19' },
                { message: 'Андрей: очень много' },
                { message: 'Настя: не наю))' }
            ]
        }
        },
        methods: {
            reverseMessage: function () {
                this.seen = false
                //this.$router.go(this.$router.currentRoute)
            }
    }

    }
</script>

<style scoped>

</style>
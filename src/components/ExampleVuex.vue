<template>
    <div>
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<!--<script src="/path/to/vue.js"></script>-->
<!--<script src="/path/to/vuex.js"></script>-->


<script>
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);
    const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment: state => state.count++,
            decrement: state => state.count--
        }
    })
    export default {
        name: "ExampleVuex",
        computed: {
            count () {
                return store.state.count
            }
        },
        methods: {
            increment () {
                store.commit('increment')
            },
            decrement () {
                store.commit('decrement')
            }
        }
    }
</script>

<style scoped>

</style>
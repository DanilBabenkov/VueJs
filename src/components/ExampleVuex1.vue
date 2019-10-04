<template>
    <div id="exa">
        <PostForm/>
        <h1>{{postsCount}}</h1>
        <div class="post" v-for="post in validPosts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import PostForm from "./PostForm";
    export default {
        name: "exa",
        components: {PostForm},
        // computed:{
        //     allPosts(){
        //         return this.$store.getters.allPosts;
        //     }
        // },
        computed:mapGetters(["validPosts", "postsCount"]),//получение данных ^^^
        methods: mapActions(['fetchPosts']),
        async mounted(){
            // return this.$store.dispatch("fetchPosts");
            this.fetchPosts(9);
            // const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
            // const  posts = await res.json(); работа с бэком без vuex
            // this.posts = posts;
        }
    }
</script>

<style scoped>
    #exa {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        width: 400px;

    }
    .post{
        border: 1px solid #0c83e2;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
</style>
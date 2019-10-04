export default {
    actions: {
       async fetchPosts(ctx, limit = 3) {
           const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
           const  posts = await res.json() //работа с бэком без vuex

           ctx.commit('updatePosts', posts)
        }
    },//является объектом
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPost(state, newPost){//синхронный
            state.posts.unshift(newPost)
        }
    }, //функции которые будут изменять store
    state: {
        posts: []
    },//определяем первоночальные данные и какие то данные которые есть в преложении
    getters: {
        validPosts(state){
          return state.posts.filter(p => {
              return p.title && p.body
          })
        },
        allPosts(state){
            return state.posts
        },
        postsCount(state, getters){
            return getters.validPosts.length
        }
    },//позволяют трансформировать данные и получать из store
}
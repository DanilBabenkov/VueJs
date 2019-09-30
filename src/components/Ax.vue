<template>
    <div>
<!--        <input type="text" v-model="postBody" @change="postPost()"/>-->
        <section>
        <div class="card">
            <h3>{{ info.name }}</h3>
            <p>{{ info.section }}</p>
            <button><router-link :to="{name:'axedit', params:{classId:info.google_id}}">Редактировать</router-link></button>
            {{ info }}
        </div>
        </section>
<!--        <p>{{info.name}}</p>-->
    </div>
</template>

<!--<script src = " https://unpkg.com/axios/dist/axios.min.js " > </script>-->
<script>
    export default {
        name: "Ax",
        data() {
            return {
                postBody: '',
                info: null
            };
        },
        // mounted() {
        //     axios
        //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //         .then(response => (this.info = response));
        // }
        created() {
            // axios.post('http://acm.tom.ru:8008/api/classroom/list',
            //     {
            //         data:{
            //             "0":{"ID":1}
            //         }
            //     })
            //      .then(response => {})
            //     .catch(e => {
            //         this.errors.push(e)
            // })
            // ,
            axios.get('http://acm.tom.ru:8008/api/classroom/list', {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njk5MDMyNDQsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.QsmMcEabk5KJUL2PcB0r0UTFIkzO-jWl8GRxxejsQck'
                },
            })
                .then(response => {this.info = response.data[0]
                    console.log(response)
                    // console.log(this.info,'ff')
                })
                .catch(error => { console.log(error)
                })
//${this.$route.params.classroomId}
//             axios.patch(`${this.domain}/api/classroom/list`, {
//                 headers: {
//                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njk2NTI1MjYsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.NMSVS1cqMYUtgTGxmOUeAAQ6z4QsQTskt0vsMWfq3kc'
//                 },
//                 data:{
//                     "name":"!!!Test!!!"
//                 }
//
//
//             })
//                 .then(response => {this.info = response.data[0]
//                     console.log(response)
//                 })
//                 .catch(error => {
//                     console.log(error)
//                 })
                // axios.get('http://acm.tom.ru:8008/api/classroom/list', {
                //     headers: {
                //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njk2NTI1MjYsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.NMSVS1cqMYUtgTGxmOUeAAQ6z4QsQTskt0vsMWfq3kc'
                //     },
                // })
                //     .then(response => {this.info = response.data[0].name
                //         console.log(response)
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })
            }
        // methods: {
        //     postPost() {
        //         axios.post('https://api.coindesk.com/v1/bpi/currentprice.json',
        //         {
        //             chartName: "Bitcoin1"
        //         })
        //             .then(response => {})
        //             .catch(error => {
        //                 console.log(error)
        //             })
        //     }
        // }

    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    section {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 200px; /* Ограничение ширины */
        margin: auto;
        text-align: center;
        font-family: sans-serif;
    }

    h3 {
        margin: 10px 10px;
        background: green;
        color: white;
    }

    p {
        padding: 40px;
        font-size: 14px;
        color: #757575;
    }

    .price {
        color: #d32f2f;
        font-size: 18px;
    }

    .card button {
        border: none;
        outline: 0;
        padding: 10px;
        color: white;
        background-color: green;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }
</style>
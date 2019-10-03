<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

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
    </div>   </nav>
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
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzAxNjU4NjQsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.7KaLxqIWIMxNZuzu0ZIiPSBXnioXkFhOEUTg_ClPXoo'
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
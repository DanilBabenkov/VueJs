<template>
    <div>
    <section>
        <div class="card">
            <h3>Редактрировать курс</h3>
            <p>Название курса</p>
            <input v-model="info.name"/>
            <p>Раздел курса</p>
            <input v-model="info.section"/>
            <button @click.prevent="addProduct(info.google_id)">Сохранить изменения</button>
            {{ info }}
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        name: "AxEdit",
        data() {
            return {
                postBody: '',
                info: null
            };
        },
        mounted(){
            this.loadProduct(this.$route.params.classId)
        },
        watch:{
            '$route.params.ID'(ID){
                this.loadProduct(ID)
            }
        },
        methods:{
            loadProduct(ID){
                axios.get(`http://acm.tom.ru:8008/api/classroom/${ID}`,
                    {
                        headers: {
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njk5MDMyNDQsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.QsmMcEabk5KJUL2PcB0r0UTFIkzO-jWl8GRxxejsQck'
                        },
                    })
                    .then(response=> {
                        this.info = response.data
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            },
            addProduct(ID){
                axios.patch(`http://acm.tom.ru:8008/api/classroom/update/${ID}`, this.info, {
                    headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njk5MDMyNDQsIkFjY291bnRJRCI6IjAyNTQ0NjI0LWJmMjMtNGU5NS05NDY2LWM2MzY0MDEwMjc0MCIsIlVzZXIiOiLQkdCw0LHQtdC90LrQvtCyINCU0LDQvdC40Lsg0KHQtdGA0LPQtdC10LLQuNGHIiwiSWQiOjI2fQ.QsmMcEabk5KJUL2PcB0r0UTFIkzO-jWl8GRxxejsQck'}
                })
                    .then(response => {
                        this.$router.push('/ax')
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }
        }
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
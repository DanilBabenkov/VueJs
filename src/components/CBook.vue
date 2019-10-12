<template>
<div class="container">
    <div class="row">
    <div class="col-xl-12">
        <div class="float-left">
        <h6 class="d-flex justify-content-start">студентам / учебные планы</h6>
        <h3 class="d-flex justify-content-start" style="font-weight: bold">Год набора</h3>
        <div class="row" id="course">
<!--        <div class="row float-left">-->
            <a class="col-3">1 курс</a>
            <a class="col-3">2 курс</a>
            <a class="col-3">3 курс</a>
            <a class="col-3">4 курс</a>
        </div>
<!--        </div>-->
    </div>
    </div>
    <div class="col-12 table">
            <div class="row">
                <div class="col-4">
                    <h5 class="d-flex justify-content-start" id="cem">1 семестр</h5>
                    <ul>
            <li>Физическая культура и спорт</li>
            <li>Философия</li>
            <li>Концепции современного знания</li>
            <li>Безопасность жизнедеятельности</li>
            <li>Профессиональный английский язык</li>
            <li>Рефакторинг и обратное проектирование</li>
            <li>Паттерны архитектуры</li>
            <li>Процесы разработки</li>
            <li>Элективные курсы по физичесткой культуре и спорту</li>
        </ul>
        </div>
        <div class="col-8" id="colrig">
            <p>This course is aimed at introducing students to computer science studies at Tomsk State University. This is an introductory course that outlines the main goals and objectives of the programme. It introduced students to the history of computer science and programming worldwide, and Tomsk region in particular. This course is specifically designed for students with no prior programming experience and taking this course does not require a background in Computer Science. This course will touch upon a varienty of topics within the field of Computer Science that will be later covered in the programme in dep</p>
            <button>Подробнее</button>
        </div>
    </div>
    </div>
    </div>
    <div class="row">
        <div class="col-3">
            <ul>
                <li class="lm">Трек профессиональной разработки (М1)</li>
                <li>Практикум по программной инженерии 1</li>
                <li>Практикум по программной инженерии 2</li>
                <li>Семинар про специализации M1</li>
            </ul>
        </div>
        <div class="col-3">
            <ul>
                <li class="lm">Трек профессиональной разработки (М2)</li>
                <li>Практикум по программной инженерии 1</li>
                <li>Практикум по программной инженерии 2</li>
                <li>Семинар про специализации M2</li>
            </ul>
        </div>
        <div class="col-3">
            <ul>
                <li class="lm">Трек профессиональной разработки (М3)</li>
                <li>Практикум по программной инженерии 1</li>
                <li>Практикум по программной инженерии 2</li>
                <li>Семинар про специализации M3</li>
            </ul>
        </div>
    </div>
    <div class="col-12">
        <h5 class="d-flex justify-content-start" id="cem2">2 семестр</h5>
    </div>
</div>
</template>

<script>
    export default {
        name: "CBook"
    }
</script>

<style scoped>
    #cem2{
        font-weight: bold;
        margin-top: 30px;
    }
ul{
    list-style: none;
    text-decoration: underline;
}
p,li{
    text-align: justify;
    font-size: 15px;
}
h6{
    font-size: 11px;
}
button{
    border-radius: 10px;
    border: 1px solid black;
        float: left;
    color: white;
    background: #0a6ebd;
        /*margin-left: 20px;*/
}
.lm{
    color: green;
    font-weight: bold;
}
#cem{
    color: #0a6ebd;
    font-weight:bold
}
#course{
    margin-bottom: 30px;
    font-weight: bold;
}
a:hover {
    border-radius: 5px;
    border: 1px solid blue;
    width: 100px;
    color: blue;
}
#colrig{
    margin-top: 8%;
}
.table{
    margin-bottom: 60px;
}



</style>

<template>
  <main>
<!--<&#45;&#45; d-flex align-items-center justify-content-center&ndash;&gt;-->
        <div class="container-fluid hero">
            <div class="container">
                <div class="d-flex justify-content-between" id="pad">
                    <div class="row" id="head">
                    <svg width="38" height="40" viewBox="0 0 38 40" fill="white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="38" height="40" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0" transform="scale(0.00262467 0.0025)"/>
                            </pattern>
                            <image id="image0" width="381" height="400" xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                    <h1 class="justify-content-end hero_text">Высшая IT школа</h1>
                    </div>
                    <nav id="menu">
                        <ul class="d-flex justify-content-end hr">
                            <li>Образование</li>
                            <li>Партнёрам</li>
                            <li>Расписание</li>
                            <li>Руководство</li>
                        </ul>
                    </nav>
                    <div class="btn-group" id="butron">
                        <button type="button" class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Menu
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Образование</a>
                            <a class="dropdown-item" href="#">Партнёрам</a>
                            <a class="dropdown-item" href="#">Расписание</a>
                            <a class="dropdown-item" href="#">Руководство</a>
                        </div>
                    </div>
                    <button class="mt-1 navbar-toggler" id="butron" type="button" data-toggle="collapse" data-target="#navigation-index" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                        <span class="navbar-toggler-icon icon-bar"></span>
                    </button>
                </div>
            <a class="justify-content-end anchor" id="hero">Обычная страница</a>
            </div>
        </div>
        <div class="container">
       <div class="row">
       <div class="col-xl-3 col-md-3">
           <ul id="menu1">
               <li>Элемент меню 1</li>
               <li>Элемент меню 2</li>
               <li>Элемент меню 3</li>
           </ul>
           <div class="btn-group col-sm-12" id="menu-close">
               <button type="button" class="btn btn-secondary dropdown-toggle" id="menu-but" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Навигация
               </button>
               <div class="dropdown-menu dropdown-menu-xl-left" id="menu-but-a">
                   <a class="dropdown-item" href="#">Элемент меню 1</a>
                   <a class="dropdown-item" href="#">Элемент меню 2</a>
                   <a class="dropdown-item" href="#">Элемент меню 3</a>
               </div>
           </div>
       </div>
       <div class="col-xl-9 col-sm-12 col-md-9">
           <div id="line"></div>
<!--           <div class="row">-->
           <h3>Заголовок 1</h3>
           <h6>Подзаголовок с каким-то текстом</h6>
           <p>Sed ut perspiciatis, unde omnis iste natus error sit extremum et quas molestias excepturi sint, obcaecati cupiditate non recusandae itaque turbent, ut earum motus et impetus quo quaerimus, non existimant oportere exquisitis rationibus conquisitis de voluptate velit esse, quam interrogare aut quid iudicat, quo enim.
               Et quidem faciunt, ut labore et voluptates repudiandae sint et aut petat aut petat aut perferendis doloribus asperiores repellat hanc ego assentior, cum memoriter, tum etiam erga nos causae confidere, sed animo etiam erga nos amice et harum quidem exercitus quid ex ea quid est.
               Si sine dubio praeclara sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil est, qui dolorem eum iure reprehenderit, qui studiose antiqua persequeris, claris et voluptates repudiandae sint et aut officiis debitis aut in animis nostris inesse notionem, ut summum bonum sit sentiri haec putat</p>

           <h4>Подзаголовок второго уровня</h4>
           <h6>Подзаголовок с каким-то текстом</h6>
           <p>Sed ut perspiciatis, unde omnis iste natus error sit extremum et quas molestias excepturi sint, obcaecati cupiditate non recusandae itaque turbent, ut earum motus et impetus quo quaerimus, non existimant oportere exquisitis rationibus conquisitis de voluptate velit esse, quam interrogare aut quid iudicat, quo enim.
               Et quidem faciunt, ut labore et voluptates repudiandae sint et aut petat aut petat aut perferendis doloribus asperiores repellat hanc ego assentior, cum memoriter, tum etiam erga nos causae confidere, sed animo etiam erga nos amice et harum quidem exercitus quid ex ea quid est.
               Si sine dubio praeclara sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil est, qui dolorem eum iure reprehenderit, qui studiose antiqua persequeris, claris et voluptates repudiandae sint et aut officiis debitis aut in animis nostris inesse notionem, ut summum bonum sit sentiri haec putat</p>

       </div>
<!--      // </div>-->
       </div>
        </div>
        <footer class="footer">
            <div class="container">
            <span class="text-muted">
                <font>Высшая IT школа (с) 2019</font>
            </span>
            </div>
        </footer>
    </main>
</template>

<script>
    export default {
        name: "Basic page"
    }
</script>

<style scoped>
    #menu-but-a{
        border: 1px solid black;
    }
    #menu-but{
        width: 700px;
        max-width: 100%;
        border: 1px solid black;
    }
#line{
    position: absolute;
    width: 1px;
    height: 543px;
    left: -70px;
    /*top: 251px;*/

    border: 1px solid #DEDEDE;
}
ul.hr {
    margin: 0; /* Обнуляем значение отступов */
    padding: 4px; /* Значение полей */
}
ul.hr li {
    width: 112px;
    height: 21px;
    left: 798px;
    top: 30px;
    opacity: 1;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #FFFFFF;
    display: inline; /* Отображать как строчный элемент */
    margin-right: 5px; /* Отступ слева */
    padding: 3px; /* Поля вокруг текста */
}
ul.hr li:hover{
    opacity: 0.6;
}
#menu-close{
    display: none;
}
li{
    /*position: absolute;*/
    width: 126px;
    height: 19px;
    left: 180px;
    top: 250px;
    font-family: Roboto;
    font-style: normal;
    opacity: 1;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    list-style: none;
    color: #317BF2;
    /*padding: 5px;*/
}
ul#menu1 li{
    margin-bottom: 7px;
}
ul#menu1 li:hover{
    color: #317BF2;
    /*background: darkgray;*/
    background: rgba(192, 196, 197, 0.23);
}
    h3{
        /*position: absolute;*/
        width: 208px;
        height: 42px;
        left: 450px;
        top: 250px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;

        margin:0 0;
        color: #000000;
    }
    h6{
        /*position: absolute;*/
        width: 290px;
        height: 21px;
        left: 450px;
        top: 297px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 21px;
        padding-top: 5px;
        padding-bottom: 30px;
        /* identical to box height */


        color: #919191;

    }
    footer{
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;

        background: #6B6B6B;
    }
    font{
        height: 19px;
        left: 43.26%;
        right: 43.19%;
        top: calc(50% - 19px/2 + 0.62px);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #FFFFFF;
    }
    p{
        /*position: absolute;*/
        /*width: 825px;*/
        /*height: 171px;*/
        left: 450px;
        top: 338px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
        padding-bottom: 50px;

    }
.dropdown-menu a:hover {
    -webkit-box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(163, 175, 176, 0.4);
    background-color: rgba(192, 196, 197, 0.23);
    color: rgba(0, 0, 0, 1);
    border: 1px solid black;
}

    h4{
        /*position: absolute;*/
        width: 343px;
        height: 28px;
        left: 450px;
        top: 549px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #000000;
    }
.hero {
    background-image: url(https://res.cloudinary.com/blab/image/upload/c_crop,h_1001,w_5575,x_0,y_1035/c_scale,h_350,w_1950/v1547026205/production/user/13177/cover);
    background-position: center;
    background-size: cover;
    /*width: 1440px;*/
    height: 200px;
    left: 0px;
    top: 0px;
    margin-bottom: 50px;
    padding-left: 40px;
}
#head{
    padding-left: 35px;
}
#butron{
    display: none;
}
.hero_text {
    padding-left: 15px;
    width: 198px;
    height: 28px;
    left: 233px;
    top: 26px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding-top: 8px;
}
    #hero{
        width: 430px;
        height: 57px;
        left: 165px;
        top: 98px;
        float: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;

        /* identical to box height */

        background: rgba(0, 0, 0, 0.5);
        color: #FFFFFF;
    }
    #pad{
        padding-top: 20px;
        margin-bottom: 29px;
    }

@media screen and (max-width: 992px) {
   #menu {
        display: none;
    }
    #butron{
        display: block;
    }
}

@media screen and (max-width: 1200px) {
    #line {
       left: 0px;
    }
}
@media screen and (max-width: 769px) {
    #menu-close {
        display: block;
    }
    #menu1{
        display: none;
    }

}
@media screen and (max-width: 550px) {
    #hero {
        position: absolute;
        left: 0px;
        padding-left: 10px;
        /* text-align: left; */
        max-width: 100%;
        font-size: 28px;
        width: 550px;
        top: 226px;
    }
}
@media screen and (max-width: 350px) {
    #hero {
         text-align: left;
    }
}
</style>

<template>
    <div id="block"></div>
</template>

<!--<script src="/dist/js/anime.min.js"></script>-->
<script>
    import anime from 'animejs/lib/anime.es.js';

    export default {
        name: "Library2"
    }
    anime({
        targets:'#block',
        translateX: 250
    })
</script>


<style scoped>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .wrapper {
        position: relative;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 1px;
        height: 100vh;
    }

    .el {
        position: absolute;
        opacity: 1;
        width: 2px;
        height: 24vh;
        margin-top: -12vh;
        transform-origin: 50% 100%;
        background: white;
    }
    #block{
        width:50px;
        height: 50px;
        background-color: lightseagreen;
        border-radius: 10px;
    }
</style>
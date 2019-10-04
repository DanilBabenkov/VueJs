<template>
    
</template>

<script>
    export default {
        install(Vue, options) {
            Vue.prototype.setItemMemory = function () {
                console.log('hello from my plugin')
            },
            console.log('hello from my plugin1');
            // 1. добавление глобального метода или свойства
            Vue.myGlobalMethod = function () {
                // некоторая логика ...
                console.log('hello from my plugin');
            }

            // 2. добавление глобального объекта
            Vue.directive('my-directive', {
                bind (el, binding, vnode, oldVnode) {
                    // некоторая логика ...
                }

            })

            // 3. добавление опций компонентов
            Vue.mixin({
                created: function () {
                    // некоторая логика ...
                }

            })

            // 4. добавление метода экземпляра
            Vue.prototype.$myMethod = function (methodOptions) {
                // некоторая логика ...
            }
        },
        name: "Func"
    }

</script>

<style scoped>

</style>
<template>
    <div id="app" :class="'background-' + backgroundColor">
        <Translator />
    </div>
</template>

<script>
    import 'roboto-fontface/css/roboto/roboto-fontface.css';
    import autosize from 'autosize';
    import Vue from 'vue';
    import Translator from './components/Translator';

    Vue.directive('autosize', {
        bind: function (el) {
            autosize(el);
        },

        unbind: function (el) {
            autosize.destroy(el)
        }
    });

    export default {
        name: 'App',
        components: {
            Translator
        },
        data() {
            return {
                backgroundColor: ''
            }
        },
        created() {
            let availableColors = ['purple', 'orange', 'teal', 'indigo', 'red', 'green'];

            this.backgroundColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        }
    }
</script>

<style>
    body,
    #app {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        min-height: 100vh;
    }

    .background-purple {
        background-image: linear-gradient(141deg, #d1c4e9 0%, #9575cd 100%);
    }

    .background-orange {
        background-image: linear-gradient(141deg, #ffccbc 0%, #ff8a65 100%);
    }

    .background-teal {
        background-image: linear-gradient(141deg, #b2dfdb 0%, #4db6ac 100%);
    }

    .background-indigo {
        background-image: linear-gradient(141deg, #c5cae9 0%, #7986cb 100%);
    }

    .background-red {
        background-image: linear-gradient(141deg, #ffcdd2 0%, #e57373 100%);
    }

    .background-green {
        background-image: linear-gradient(141deg, #c8e6c9 0%, #81c784 100%);
    }
</style>
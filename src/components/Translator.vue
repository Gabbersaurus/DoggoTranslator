<template>
    <div class="container">
        <h1 class="title">
            Hi fren! 🐕
        </h1>

        <div class="subtitle">
            This is the doggo translator developed by
            <a href="https://github.com/Gabbersaurus" target="_blank">Gabbersaurus</a>
        </div>

        <div class="settings">
            <h3>
                Settings:
            </h3>
            <div>
                Reversed (experimental)
                <input type="checkbox" v-model="reversed"/>
            </div>
            <div>
                Language
                <select v-model="language">
                    <option v-for="item in availableLanguages" :value="item">{{ item }}</option>
                </select>
            </div>

        </div>

        <div class="flex">
            <div class="block">
                <div class="header">
                    Input
                </div>
                <textarea class="input" v-model="input" ref="input" rows="1" v-autosize></textarea>
            </div>

            <div class="block">
                <div class="header">
                    Output
                </div>
                <div class="output" v-html="translated" ref="output">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DoggoTranslator from '../classes/DoggoTranslator/DoggoTranslator';

    let doggoTranslator = new DoggoTranslator('en');

    export default {
        name: 'Translator',
        data() {
            return {
                input: 'Hi friend! I am the dog translator!',
                availableLanguages: doggoTranslator.getLanguages(),
                language: doggoTranslator.language,
                reversed: false
            }
        },
        methods: {
            /**
             * Makes sure that the input and output are both the same size
             */
            resizeOutput() {
                if (this.$refs.output && this.$refs.input) {
                    this.$refs.output.style.height = this.$refs.input.style.height;
                }
            }
        },
        computed: {
            /**
             * Automatically translates the input while typing
             */
            translated: function () {
                this.resizeOutput();

                let sentence = doggoTranslator.translateSentence(this.input, this.reversed);

                return sentence.replace(/(?:\r\n|\r|\n)/g, '<br />');
            }
        },
        watch: {
            /**
             * Sets the language on the translator instance when it changes
             */
            language: () => {
                doggoTranslator.setLanguage(this.language);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 25px 100px;
        height: 100%;
    }

    .title {
        font-weight: 300;
        font-size: 64px;
        height: 30%;
        margin-bottom: 10px;
    }

    .subtitle {
        font-weight: 200;
        font-size: 32px;
        padding: 10px 0;
    }

    .settings {
        font-weight: 200;
        font-size: 26px;
        padding: 10px 0;

        h3 {
            margin: 0;
            font-weight: 300;
        }
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    .block {
        width: 50%;
        box-sizing: border-box;
    }

    .block:first-child {
        padding-right: 25px;
    }

    .block:last-child {
        padding-left: 25px;
    }

    .header {
        font-weight: 300;
        font-size: 32px;
        padding: 10px 0;
    }

    .input {
        border: none;
        overflow: auto;
        outline: none;
        resize: none;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        box-sizing: border-box;
        padding: 25px;
        border-radius: 5px;
        box-shadow: 0 4px 0 0 rgba(0, 0, 0, .1);
    }

    .output {
        overflow-wrap: break-word;
        background-color: #ffffff;
        padding: 25px;
        border-radius: 5px;
        box-sizing: border-box;
        box-shadow: 0 4px 0 0 rgba(0, 0, 0, .1);
    }

    @media (max-width: 961px) {
        .container {
            padding: 5px 25px;
            height: 100%;
        }

        .block {
            width: 100%;
        }

        .block:first-child {
            padding-right: 0;
        }

        .block:last-child {
            padding-left: 0;
        }
    }
</style>

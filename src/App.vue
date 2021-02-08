<template>
    <div class="container">
        <Navbar />
        <main>
            <Form />
        </main>
    </div>
</template>

<script>
//import axios
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//import pages
import Form from "./components/Form";
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Form,
        Navbar,
    },
};
</script>

<style lang="scss">
:root {
    font-size: 16px;
    font-family: "Courier New", Courier, monospace;

    --text-primary: #1b1b1b;
    --text-secondary: #646464;
    --bg-primary: #1b1b1b;
    --bg-secondary: #646464;
    --accent-primary: #8ec5fc;

    --transition-speed: 250ms;
}

body {
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

    height: 100vh;
    margin: 0;
    padding: 0;
}

main {
    margin-left: 5rem;
    padding: 1rem;
}

//custom scrollbar
// body::-webkit-scrollbar{
//     width: 0.25rem;
// }

// body::-webkit-scrollbar-track{
//     background-color: var(--bg-secondary);
// }

// body::-webkit-scrollbar-thumb{
//     background-color: #8000ff;
// }
</style>

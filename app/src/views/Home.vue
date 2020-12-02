<template>
    <div>
        <Navbar />
        <div class="back">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
        <div class="slice"><p>Academia com controle de atividades online.</p></div>
        <Plans />

        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Main_HelloWorld.vue'
import Navbar from '@/components/Main_Navbar.vue'
import Footer from '@/components/Main_Footer.vue'
import Plans from '@/components/Main_Plans.vue'

export default {
    name: 'Home',

    components: {
        Navbar,
        HelloWorld,
        Plans,
        Footer
    }
}
</script>

<style>
    .back {
        background-image: url(../assets/VirtusHome.png);
        background-size: cover
    }

    .slice {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px
    }

    .slice p {
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        font-weight: 100
    }
</style>

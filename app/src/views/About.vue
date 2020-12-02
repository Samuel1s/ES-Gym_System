<template>
    <div>
        <Navbar />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Main_Navbar.vue'
import Footer from '@/components/Main_Footer.vue'

export default {
    name: 'Sobre',

    components: {
        Navbar,
        Footer
    }
}
</script>
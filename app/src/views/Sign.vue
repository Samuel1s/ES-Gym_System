<template>
    <div>
        <Navbar />
        <SignIn />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Main_Navbar.vue'
import SignIn from '@/components/Admin_SignIn.vue'
import Footer from '@/components/Main_Footer.vue'

export default {
    name: 'Login',

    components: {
        Navbar,
        SignIn,
        Footer
    }
}
</script>
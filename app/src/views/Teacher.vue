<template>
    <div>
        <Navbar />
        <Dashboard />
    </div>   
</template>

<script>
    import Navbar from '@/components/Admin_Navbar.vue'
    import Dashboard from '@/components/Teacher_Dashboard.vue'

    export default {
        components: {
            Navbar,
            Dashboard
        }
        
    }
</script>
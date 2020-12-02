<template>
    <div>
        <Navbar />
        <Dashboard />
    </div>
</template>

<script>
// @ is an alias to /src

import Dashboard from '@/components/User_Dashboard.vue'
import Navbar from '@/components/User_Navbar.vue'

export default {
    name: 'UserDashboard',

    components: {
        Navbar,
        Dashboard
        
    }
   
}
</script>
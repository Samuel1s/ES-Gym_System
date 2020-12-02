<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "App",

        components: {},

        data: () => ({
            value: 1,
            active: true
        }),
    };
</script>

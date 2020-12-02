<template>
    <v-bottom-navigation height="150px" color="primary" dark>
            <div>

            </div>
            <v-btn>
                <span>Recents</span>
                <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn>
                <span>Favorites</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn>
                <span>Nearby</span>
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>
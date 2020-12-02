<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
            <p style="margin: 0px; margin-top: 2px">VIRTUS</p>
        </div>

        <v-spacer>
            <router-link class="mr-2" to="/">
                <v-btn target="_blank" text>
                    <span class="mr-2">Principal</span>
                </v-btn>
            </router-link>
            <router-link class="mr-2" to="/about">
                <v-btn target="_blank" text>
                    <span class="mr-2">Sobre</span>
                </v-btn>
            </router-link>
        </v-spacer>

        <router-link to="/signIn"> 
            <v-btn target="_blank" text>
                <span class="mr-2">Sign in</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </router-link>    
    </v-app-bar>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>
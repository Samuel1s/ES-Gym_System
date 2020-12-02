<template>
    <nav>
        <v-navigation-drawer dark app mini-variant class="light-blue accent-4">
            <v-list tile>
                <v-list-item class="mb-8" router to="/">
                    <v-list-item-action>
                        <v-icon>fas fa-window-restore</v-icon>
                    </v-list-item-action>    
                </v-list-item>
                <v-list-item class="mb-8">
                    <v-list-item-action>
                        <v-icon>far fa-clock</v-icon>
                    </v-list-item-action>    
                </v-list-item> 
                <v-list-item class="mb-8">
                    <v-list-item-action>
                        <v-icon>fas fa-chart-line</v-icon>
                    </v-list-item-action>    
                </v-list-item> 
                <v-list-item class="mb-8">
                    <v-list-item-action>
                        <v-icon>far fa-comment-alt</v-icon>
                    </v-list-item-action>    
                </v-list-item> 
                <v-list style="position: absolute; bottom:0" class="mb-8" flat @click="clearState()">
                    <v-list-item router to="/signIn">
                        <v-list-item-action>
                            <v-icon right>fas fa-sign-out-alt</v-icon>
                        </v-list-item-action> 
                    </v-list-item>
                </v-list>   
            </v-list>   
        </v-navigation-drawer>  
        <v-navigation-drawer dark app class="light-blue darken-4" fixed right>
            <v-layout column align-center>
                <v-flex class="mt-5"> 
                    <v-avatar size="100">
                        <v-img src="../assets/Male-Avatar.svg"></v-img>
                    </v-avatar>  
                    <h4 class="white--text subheading mt-1 text-center">{{user.name}}</h4>
                    <h6 v-show="user.craft" class="white--text subheading mt-1 text-center" >{{user.craft}}</h6>
                    <h6 v-show="user.speciality" class="white--text subheading mt-1 text-center" >{{user.speciality}}</h6>
                </v-flex>    
            </v-layout> 
            <p class="white--text subheading p1-3 mt-3"> Notificações</p>   
            <v-list rounded dense>
                <v-list-item router to="/">
                    <v-list-item-action>
                        1
                    </v-list-item-action>    
                    <v-list-item-content>
                        <v-list-item-title> Novo usuário</v-list-item-title>
                    </v-list-item-content>    
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-action>
                        2
                    </v-list-item-action>    
                    <v-list-item-content>
                        <v-list-item-title> Novo usuário</v-list-item-title>
                    </v-list-item-content>    
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-action>
                        3
                    </v-list-item-action>    
                    <v-list-item-content>
                        <v-list-item-title> Novo usuário</v-list-item-title>
                    </v-list-item-content>    
                </v-list-item>
                <p class="white--text subheading p1-3 mt-3">Próximas tarefa</p>
                <v-timeline align-top dense fill-dot small dark>
                    <v-timeline-item fill-dot small color="white" class="white--text">Cadastrar Aluno x</v-timeline-item>
                    <v-timeline-item fill-dot small color="white" class="white--text">Cadastrar Aluno z</v-timeline-item>
                    <v-timeline-item fill-dot small color="white" class="white--text">Cadastrar Aluno y</v-timeline-item>
                </v-timeline>   
            </v-list>    
        </v-navigation-drawer>      
    </nav>   
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    
    export default {
        data:() => ({
            drawer: true
        }),

        computed: {
            ...mapState(['user'])
            
        },

        methods: {
            ...mapMutations(['clearState'])
        }

    }
</script>
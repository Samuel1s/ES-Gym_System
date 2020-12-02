<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        
        <v-layout row justify-center v-show="overlay == false">
            <v-flex md12>
                <v-card class="ma-5 text-center mt-8" shaped elevation="1">
                    <v-list  v-for="pupil in pupils" :key="pupil.id" rounded>
                            <v-list-item>
                                <v-row align="center">
                                    <v-col cols="10" md="1">
                                        <v-list-item-avatar size="35">
                                            <v-img src="../assets/Male-Avatar.svg"/>
                                        </v-list-item-avatar>  
                                    </v-col>   
                                    <v-col cols="10" md="3">
                                        <v-list two-line subheader class="ml-n8">
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ pupil.register_number}}</v-list-item-title>
                                                </v-list-item-content>  
                                            </v-list-item>  
                                        </v-list>    
                                    </v-col> 
                                    <v-layout justify-end>
                                        <v-col cols="10" md="1" align-center>
                                            <v-list class="ml-n8">
                                                <v-list-item-action>
                                                    <v-tooltip top>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_set_workout = true, getPupilDetail(pupil)">
                                                                <v-icon  center color="primary">fas fa-edit</v-icon>
                                                            </v-btn>    
                                                        </template>
                                                        <span>Cadastrar Treino</span>
                                                    </v-tooltip>    
                                                </v-list-item-action>   
                                            </v-list>   
                                        </v-col>
                                        <v-col cols="10" md="1" align-center>
                                            <v-list class="ml-n8">
                                                <v-list-item-action>
                                                    <v-tooltip top>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_show_exam = true, getMedicalExam(pupil.user_medical_exams)">
                                                                <v-icon center color="green">fas fa-notes-medical</v-icon>
                                                            </v-btn> 
                                                        </template> 
                                                        <span>Ver Exame Médico</span>    
                                                    </v-tooltip>          
                                                </v-list-item-action>  
                                            </v-list>
                                        </v-col>
                                    </v-layout>                            
                                </v-row>
                            </v-list-item> 
                         
                    </v-list>
                </v-card>       
            </v-flex>
        </v-layout> 
        
        <v-dialog v-model="dialog_show_exam" persistent max-width="900" >
            <v-card>
                <v-card-title class="headline">
                    Detalhes do Exame Médico do Aluno
                </v-card-title>
                <v-spacer></v-spacer>
                <v-row align-content="space-between" px="8">
                    <v-col cols="12" align="center" mx="2">
                         <v-card style="width: 600px; height: 150px; overflow-y: auto; overflow-x: auto">
                            <v-card-title class="headline">
                                Dados do Exame:
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                    <v-list-item-content style="text-align: start; padding: 0 40px">
                                        <v-list-item-subtitle>Ausculta: {{ caputed.cardiac_auscultation }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Pressão: {{ caputed.blood_pressure }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Laudo médico: {{ caputed.anamnesis }}</v-list-item-subtitle>
                                    </v-list-item-content>  
                                </v-list-item>  
                                </v-list>  
                        </v-card>   
                    </v-col>
                    <v-col cols="12" align="center" mx="2">
                         <v-card style="width: 600px; height: 150px; overflow-y: auto; overflow-x: auto">
                            <v-card-title class="headline">
                                Extras:
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                    <v-list-item-content style="text-align: start; padding: 0 40px">
                                        <v-list-item-subtitle>Massa Magra: {{ caputed.lean_mass_percentage }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Gordura: {{ caputed.fat_percentage }}</v-list-item-subtitle>
                                    </v-list-item-content>  
                                </v-list-item>  
                            </v-list>  
                        </v-card>   
                    </v-col>          
                </v-row>   
                
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog_show_exam = false">
                    Fechar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_set_workout" persistent max-width="700px" >
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastrar Treino:</span>
                </v-card-title>

                <v-row align="center">
                    <v-col cols="10" md="1">
                        <v-list-item-avatar size="35">
                            <v-img src="../assets/Male-Avatar.svg"/>
                        </v-list-item-avatar>  
                    </v-col>   
                    <v-col cols="10" md="3">
                        <v-list two-line subheader class="ml-n8">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ pupilDetail.register_number}}</v-list-item-title>
                                </v-list-item-content>  
                            </v-list-item>  
                        </v-list>    
                    </v-col>  
                </v-row>   
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" >
                                <v-textarea outline v-model="pupilDetail.general_description_of_training" label="Detalhes do Treino" rounded></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>'*' Campo Obrigatório.</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_set_workout = false">
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog_set_workout = false, setWorkOut(pupilDetail)">
                        Cadastrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>     
</template>

<script>
    
	import { mapState, mapActions } from 'vuex'
 
    export default {
        name: 'Dashboard',

        data: () => ({
            caputed: {},
            pupilDetail: {},
            dialog_set_workout: false,
            dialog_show_exam: false,
            overlay: true,
        }),

        computed: {
            ...mapState(['pupils', 'list_clients', 'pupil']),

        },

        methods: {
            getMedicalExam(obj) {
               this.caputed = obj
            },

            getPupilDetail(obj) {
                this.pupilDetail = obj
            },

            ...mapActions(['setWorkOut'])
        },
    

        mounted() {
            setTimeout(() => { this.overlay = false}, 2000)
            this.$store.dispatch('getAllPupils')
        }
    }
</script>
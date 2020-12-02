<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        
        <v-layout row justify-center v-show="overlay == false">
            <v-flex md12>
                <v-card class="ma-5 text-center mt-8" shaped elevation="1">
                    <v-list  v-for="patient in patients" :key="patient.id" rounded>
                        <v-list-item>
                            <v-row align="center">
                                <v-col cols="10" md="1">
                                    <v-list-item-avatar size="35">
                                        <v-img v-show="patient.user.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                        <v-img v-show="patient.user.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                                    </v-list-item-avatar>  
                                </v-col>   
                                <v-col cols="10" md="3">
                                    <v-list two-line subheader class="ml-n8">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ patient.user.name }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ patient.user.email }}</v-list-item-subtitle>
                                            </v-list-item-content>  
                                        </v-list-item>  
                                    </v-list>    
                                </v-col> 
                                <v-col cols="10" md="1">
                                    <v-list class="ml-n8">
                                        <v-list-item-action>
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on">
                                                        <v-icon v-show="patient.user.pending_exam == true"  center color="red">fas fa-notes-medical</v-icon>
                                                        <v-icon v-show="patient.user.pending_exam == false"  center color="green">fas fa-notes-medical</v-icon>
                                                    </v-btn>  
                                                </template>      
                                                <span>Exame Médico</span>
                                            </v-tooltip>
                                        </v-list-item-action>   
                                    </v-list>   
                                </v-col> 
                                <v-layout justify-end>
                                    <v-col cols="10" md="1" align-center>
                                        <v-list class="ml-n8">
                                        <v-list-item-action>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_validate_exam = true; getPatient(patient), showIMC()">
                                                            <v-icon  center color="primary">fas fa-edit</v-icon>
                                                        </v-btn>    
                                                    </template>
                                                    <span>Validar Exame</span>
                                                </v-tooltip>    
                                            </v-list-item-action>   
                                        </v-list>   
                                    </v-col>
                                    <v-col cols="10" md="1" align-center>
                                        <v-list class="ml-n8">
                                            <v-list-item-action>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_show_details = true, getPatient(patient)">
                                                            <v-icon  center color="primary">fas fa-eye</v-icon>
                                                        </v-btn> 
                                                    </template> 
                                                    <span>Vizualizar</span>    
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
        
        <v-dialog v-model="dialog_show_details" persistent max-width="900" >
            <v-card>
                <v-card-title class="headline">
                    Detalhes do Paciente
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
                                        <v-list-item-subtitle>Ausculta: {{ patient.cardiac_auscultation }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Pressão: {{ patient.blood_pressure }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Anamnesis: {{ patient.anamnesis }}</v-list-item-subtitle>
                                    </v-list-item-content>  
                                </v-list-item>  
                                </v-list>  
                        </v-card>    
                    </v-col>          
                </v-row>   
                
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog_show_details = false">
                    Fechar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_validate_exam" persistent max-width="700px" >
            <v-card>
                <v-card-title>
                    <span class="headline">Validar Exame</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="patient.cardiac_auscultation"  label="Ausculta Cardíaca" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="patient.blood_pressure" label="Pressão sanguínea" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="patient.fat_percentage" label="Gordura(%)*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model.number="patient.lean_mass_percentage" label="Massa Magra(%)*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                 <v-select return-object
                                    :items="list_imc"
                                    v-model="patient.physical_aptitude"
                                    item-text="max_rate"
                                    item-value="id"
                                    persistent-hint
                                    @change="choosedImc(choose.id)"
                                ></v-select>
                            </v-col>  
                            <v-col cols="12" >
                                <p>Descrição médica:</p>
                                <v-textarea solo v-model="patient.anamnesis" label="Laudo médico"></v-textarea>
                            </v-col>
                            
                        </v-row>
                    </v-container>
                    <small>'*' Campo Obrigatório.</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_validate_exam = false">
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="patient.result_exam = true, dialog_validate_exam = false, validateExam(patient)">
                        Atualizar
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
            choose: {id: 1},
            dialog_validate_exam: false,
            dialog_show_details: false,
            overlay: true,
        }),

        computed: {
            ...mapState(['patients', 'patient', 'list_imc']),

        },
    
        methods: {
            ...mapActions(['validateExam', 'getPatient', 'showIMC']),

            choosedImc(item){
                this.choose.id = item.value 
            }
        },

        mounted() {
            setTimeout(() => { this.overlay = false}, 2000)
            this.$store.dispatch('getAllPatients', 'showIMC')
        }
    }
</script>
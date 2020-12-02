<template>
    <v-app :style="{background: $vuetify.theme.themes.light.background}">
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        
        <v-layout row v-show="overlay == false">
            <v-flex md3>
                <v-app :style="{background: $vuetify.theme.themes.light.background}">
                    <v-flex>
                        <v-card class="ma-5 text-center mt-8" shaped elevation="10">
                            <v-avatar class="mt-n7" size="60" elevation="10">
                                <v-img v-show="user.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                <v-img v-show="user.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                            </v-avatar>    
                            <v-card-title class="layout justify-center">{{ user.name }}</v-card-title>
                            <v-card-subtitle class="layout justify-center">{{ user.age }}</v-card-subtitle>
                            <v-list class="mt-n5">
                                <v-list-item>
                                    <v-list-item-title class="light-blue--text text--accent-4">Blood</v-list-item-title>
                                    <v-list-item-title class="light-blue--text text--accent-4">Height</v-list-item-title>
                                    <v-list-item-title class="light-blue--text text--accent-4">Weight</v-list-item-title>
                                </v-list-item>    
                                <v-list-item>
                                    <v-list-item-subtitle>{{ user.bloody_type }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>170cm</v-list-item-subtitle>
                                    <v-list-item-subtitle>60kg</v-list-item-subtitle>
                                </v-list-item>    
                            </v-list>    
                        </v-card>    
                    </v-flex>
                    <v-flex>
                        <v-card class="ma-5 mt-n2" shaped elevation="10">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar size="10" color="light-blue accent-4"></v-list-item-avatar> 
                                    <v-list-item-title class="ml n-2">{{auth.login}}</v-list-item-title>
                                    <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="light-blue--text text--accent-4">Mon</v-list-item-title>
                                    <v-list-item-title class="light-blue--text text--accent-4">Ter</v-list-item-title>
                                    <v-list-item-title class="light-blue--text text--accent-4">Qua</v-list-item-title>
                                </v-list-item>    
                                <v-list-item class="mt-n5"> 
                                    <v-list-item-subtitle>3 time per week</v-list-item-subtitle>
                                </v-list-item>   
                                <v-divider></v-divider> 
                            </v-list>
                            <v-list two-line subheader>
                                <v-list-item>
                                    <v-list-item-avatar size="35">
                                        <v-img v-show="user.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                        <v-img v-show="user.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                                    </v-list-item-avatar>    
                                    <v-list-item-content class="ml-n2">
                                        <v-list-item-title>RG</v-list-item-title>
                                        <v-list-item-subtitle>{{ user.n_identity }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>    
                            </v-list>  
                            <v-list two-line subheader class="mt-n5">
                                <v-list-item>
                                    <v-list-item-title>Matrícula</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.registration_u.register_number }}</v-list-item-subtitle>
                                </v-list-item>    
                            </v-list>
                            <v-list two-line subheader class="my-n8">
                                <v-list-item>
                                    <v-list-item-title class="light-blue--text text--accent-4">Criado em</v-list-item-title>
                                    <v-list-item-title class="light-blue--text text--accent-4">Horário</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mt-n10">
                                    <v-list-item-title >{{ user.registration_u.created_at.substr(0,10) }}</v-list-item-title>
                                    <v-list-item-title >{{ user.registration_u.created_at.substr(11,8) }}</v-list-item-title>
                                </v-list-item>  
                            </v-list>           
                        </v-card>    
                    </v-flex> 
                    <v-flex>
                        <v-card class="ma-5 text-center mt-6" shaped elevation="10">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1">
                                        <v-icon v-show="user.credit_card_flag == 'visa'">fab fa-cc-visa fa-sm</v-icon>
                                        <v-icon v-show="user.credit_card_flag == 'master-card'">fab fa-cc-mastercard fa-sm></v-icon>
                                    </v-list-item-title>   
                                    <v-list-item-subtitle>Nº: {{ user.n_credit_card }}</v-list-item-subtitle> 
                                </v-list-item-content>  
                                <v-list-item-avatar size="60" color="light-blue accent-4">
                                    <v-icon color="white">fas fa-plus</v-icon>
                                </v-list-item-avatar>      
                            </v-list-item>    
                        </v-card>    
                    </v-flex>           
                </v-app>    
            </v-flex> 
            <v-flex md9>
                <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
                    <v-container>
                        <v-flex>
                            <v-list class="mt-5">
                                <v-list-item>
                                    <v-list-item-title class="light-blue--text text--accent-4">Seus exames</v-list-item-title>
                                    <v-list-item-action>
                                        <v-btn class="ma-2" title outlined="" color="light-blue accent-4">
                                            <v-icon left>fas fa-eye</v-icon> VER MAIS
                                        </v-btn>    
                                    </v-list-item-action>    
                                </v-list-item>
                            </v-list>    
                        </v-flex>
                        <v-flex>
                            <v-row no-gutter>
                                <v-col cols="12" md="4">
                                    <v-list>
                                        <v-list-item v-for="exam in user.exams" :key="exam.id">
                                            <v-row>
                                                <v-col cols="12" md="2">
                                                    <v-card v-show="exam.result_exam == true" height="80px" width="10px" color="green"></v-card>
                                                    <v-card v-show="exam.result_exam == false" height="80px" width="10px" color="red"></v-card>
                                                </v-col>   
                                                <v-col cols="12" md="10">
                                                    <v-list two-line subheader class="ml-n8">
                                                        <v-list-item>
                                                            <v-list-item-content>
                                                                <v-list-item-subtitle>{{ exam.created_at.substr(0,10)}}</v-list-item-subtitle>
                                                                <v-list-item-title v-show="exam.result_exam == true" >Exame Valido</v-list-item-title>
                                                                <v-list-item-title v-show="exam.result_exam == false" >Exame Não Validado</v-list-item-title>
                                                            
                                                                <v-list-item-subtitle>IMC: {{ exam.physical_aptitude.physical_description }}</v-list-item-subtitle>
                                                            </v-list-item-content>  
                                                        </v-list-item>  
                                                    </v-list>    
                                                </v-col>     
                                            </v-row>
                                        </v-list-item>
                                    </v-list>    
                                </v-col>  
                            </v-row>    
                        </v-flex> 
                        <v-flex class="mt-12">
                            <v-row no-gutters="">
                                <v-col cols="12" md="8">
                                    <v-flex>
                                        <v-list class="mt-5">
                                            <v-list-item>
                                                <v-list-item-title class="light-blue--text text--accent-4">Health Curve</v-list-item-title>
                                                <v-list-item-content>
                                                    <v-btn class="mr-1" outlined color="cyan-darken-1">D</v-btn>
                                                </v-list-item-content>
                                                <v-list-item-content>
                                                    <v-btn class="mr-1" outlined color="cyan-darken-1">W</v-btn>
                                                </v-list-item-content>    
                                                <v-list-item-content>
                                                    <v-btn class="mr-1" outlined color="cyan-darken-1">M</v-btn>
                                                </v-list-item-content>        
                                            </v-list-item>    
                                        </v-list>    
                                    </v-flex>
                                    <v-flex>
                                        <v-sparkline
                                        :value="value"
                                        :gradient="gradient"
                                        :smooth="radius || false"
                                        :padding="padding"
                                        :line-width="width"
                                        :stroke-linCap="lineCap"
                                        :grandient-direction="gradientDirection"
                                        :fill="fill"
                                        :type="type"
                                        :auto-line-width="autoLineWidth"
                                        auto-draw=""
                                        >
                                        </v-sparkline>
                                    </v-flex>
                                    <v-flex class="mt-5">
                                        <v-list class="ml-5">
                                            <v-list-item>
                                                <v-list-item-avatar color="light-blue accent-4" size="20px"></v-list-item-avatar>
                                                <v-list-item-title>Average</v-list-item-title>
                                                <v-list-item-avatar color="light-blue accent-4" size="20px"></v-list-item-avatar>
                                                <v-list-item-title class="ml-5">My Data</v-list-item-title>
                                            </v-list-item>
                                        </v-list>   
                                    </v-flex>            
                                </v-col> 
                                <v-col cols="12" md="4">
                                    <v-flex class="ml-10">
                                        <v-list>
                                            <v-list-item-title class="light-blue--text text--accent-4">Nearest Treatment & Advice</v-list-item-title>
                                        </v-list>
                                    </v-flex>
                                    <v-flex class="ml-10">
                                        <v-row>
                                            <v-date-picker
                                            v-model="date2"
                                            :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                            color="light-blue accent-4"
                                            >
                                            </v-date-picker>    
                                        </v-row>
                                    </v-flex>            
                                </v-col>       
                            </v-row>    
                        </v-flex>       
                    </v-container>    
                </v-app>    
            </v-flex>
        </v-layout>    
    </v-app>
</template>

<script>
	import { mapState } from 'vuex'
 
    const gradients = [
        ['#222'],
            ['#42b3f4'],
            ['red', 'orange', 'yellow'],
            ['purple', 'violet'],
            ['#00c6ff', '#F0F', '#FF0'],
            ['#f72047', '#ffd200', '#1feaea']
    ]
    export default {
        data:() => ({
            width: 2,
            radius: 10,
            padding: 8,
            lineCap: 'round',
            gradient: gradients[5],
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            gradientDirection: 'top',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,
            arrayEvents: null,
            date2: new Date().toISOString().substr(0,10),
            data_true: true,
            overlay: true
        }),

        computed: {
            theme() {
                return this.$vuetify.theme.dark ? "dark" : "light"
            }, 

            ...mapState(['user', 'auth'])
        },
        
        mounted() {
            setTimeout(() => { this.overlay = false}, 2000)
        }
    }
</script>>
<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        
        <v-layout row justify-center v-show="overlay == false">
            <v-flex md12>
                <v-card class="ma-5 text-center mt-8" shaped elevation="1">
                    <v-list  v-for="client in list_clients" :key="client.id" rounded>
                        <v-list-item>
                            <v-row align="center">
                                <v-col cols="10" md="1">
                                    <v-card v-show="client.registration_u != null" height="60px" width="10px" color="green"></v-card>
                                    <v-card v-show="client.registration_u == null" height="60px" width="10px" color="red"></v-card>    
                                </v-col>    
                                <v-col cols="10" md="1">
                                    <v-list-item-avatar size="35">
                                        <v-img v-show="client.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                        <v-img v-show="client.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                                    </v-list-item-avatar>  
                                </v-col>   
                                <v-col cols="10" md="3">
                                    <v-list two-line subheader class="ml-n8">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ client.name }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ client.email }}</v-list-item-subtitle>
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
                                                        <v-icon v-show="client.pending_exam == true"  center color="red">fas fa-notes-medical</v-icon>
                                                        <v-icon v-show="client.pending_exam == false"  center color="green">fas fa-notes-medical</v-icon>
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
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_update_user = true; getClient(client)">
                                                            <v-icon  center color="primary">fas fa-edit</v-icon>
                                                        </v-btn>    
                                                    </template>
                                                    <span>Atualizar</span>
                                                </v-tooltip>    
                                            </v-list-item-action>   
                                        </v-list>   
                                    </v-col>
                                    <v-col cols="10" md="1" align-center>
                                        <v-list class="ml-n8">
                                            <v-list-item-action>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_delete = true; getDataClient(client)">
                                                            <v-icon  center color="red">fas fa-trash-alt</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Excluir</span>    
                                                </v-tooltip>    
                                            </v-list-item-action>  
                                        </v-list>
                                    </v-col> 
                                    <v-col cols="10" md="1" align-center>
                                        <v-list class="ml-n8">
                                            <v-list-item-action>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_show_details = true, getDataClient(client)">
                                                            <v-icon  center color="primary">fas fa-eye</v-icon>
                                                        </v-btn> 
                                                    </template> 
                                                    <span>Vizualizar</span>    
                                                </v-tooltip>          
                                            </v-list-item-action>  
                                        </v-list>
                                    </v-col>
                                    <v-col cols="10" md="1" align-center>
                                        <v-list class="ml-n8">
                                            <v-list-item-action>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn class="ma-2" outlined="" color="white" v-bind="attrs" v-on="on" @click="dialog_register_user = true, getClient(client), showAllPlans(), show_rt_Classes(), show_cf_Classes(), show_wt_Classes(), show_sw_Classes(), show_sp_Classes()">
                                                            <v-icon  center color="primary">fas fa-file-alt</v-icon>
                                                        </v-btn> 
                                                    </template> 
                                                    <span>Matricular</span>    
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
        <v-dialog v-model="dialog_new_user" persistent max-width="700px" >
            <template v-slot:activator="{ on, attrs }">
                <v-layout justify-end>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar size="60" color="light-blue accent-4" v-bind="attrs" v-on="on">
                                <v-icon color="white">fas fa-plus</v-icon>
                            </v-list-item-avatar> 
                        </v-list-item>
                    </v-list>
                </v-layout>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastrar Cliente</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="new_client.name" label="Nome completo*" required ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="new_client.email" label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select  v-model="new_client.gender" :items="['masculino', 'feminino']" label="Sexo*" required ></v-select>
                            </v-col>
                             <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="new_client.age"  label="Idade*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="new_client.blood_type" :items="['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Não Sabe']" label="Tipo Sanguíneo*" required ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="new_client.cpf" label="CPF*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="new_client.n_identity" label="Nº Identidade*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="new_client.n_telephone" label="Nº Telefone*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="new_client.n_credit_card" label="Nº Cartão de Crédito*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="new_client.owner_name_credit_card" label="Nome Proprietário*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="new_client.credit_card_flag" :items="['master-card', 'visa', 'outro']" label="Bandeira*" required ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>'*' Campo Obrigatório.</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_new_user = false">
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog_new_user = false, newClient()">
                        Criar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_delete" persistent max-width="400" >
            <v-card>
                <v-card-title class="headline">
                    Tem certeza disso?
                </v-card-title>
                <v-card-text>Ao clicar no botão confimar você irá excluir o cliente {{captured.name}} <strong>e não o verá novamente,</strong> caso contrário aperte o botão cancelar.</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog_delete = false">
                    Cancelar
                </v-btn>
                <v-btn color="primary" text @click="dialog_delete = false, removeClient(captured)">
                    Confimar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_show_details" persistent max-width="800" >
            <v-card>
                <v-card-title class="headline">
                    Detalhes do Cliente
                </v-card-title>
                <v-spacer></v-spacer>
                <v-row align="center">
                    <v-col cols="10" md="2" align="center" >
                        <v-list-item-avatar size="40">
                                <v-img v-show="captured.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                <v-img v-show="captured.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                        </v-list-item-avatar>  
                    </v-col>   
                    <v-col cols="10" md="4" align="start">
                        <v-list two-line subheader class="ml-n8">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ captured.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ captured.email }}</v-list-item-subtitle>
                                </v-list-item-content>  
                            </v-list-item>  
                        </v-list>    
                    </v-col> 
                </v-row>
                <v-row align-content="space-between" px="8">
                    <v-col cols="12" sm="6" md="4" align="center" mx="2">
                        <v-card style="width: 300px; height: 150px; overflow-y: auto">
                            <v-card-title class="headline">
                                Dados Pessoais:
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                    <v-list-item-content style="text-align: start; padding: 0 40px">
                                        <v-list-item-subtitle>Telefone: {{ captured.n_telephone}}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Identidade: {{ captured.n_identity }}</v-list-item-subtitle>
                                        <v-list-item-subtitle>CPF: {{ captured.cpf }}</v-list-item-subtitle>
                                    </v-list-item-content>  
                                </v-list-item> 
                            </v-list>     
                        </v-card>    
                    </v-col>
                    <v-col cols="12" sm="6" md="4" align="center" mx="2">
                        <v-card style="width: 300px; height: 150px; overflow-y: auto">
                            <v-card-title class="headline">
                                Dados do Cartão:
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                    <v-list-item-content style="text-align: start; padding: 0 40px">
                                        <v-list-item-subtitle>Nome: {{ captured.owner_name_credit_card}}</v-list-item-subtitle>
                                        <v-list-item-subtitle>Nº: {{ captured.n_credit_card }}</v-list-item-subtitle>
                                        <v-list-item-subtitle class="headline mb-1">
                                            <v-icon v-show="captured.credit_card_flag == 'visa'">fab fa-cc-visa fa-sm</v-icon>
                                            <v-icon v-show="captured.credit_card_flag == 'master-card'">fab fa-cc-mastercard fa-sm></v-icon>
                                        </v-list-item-subtitle>   
                                    </v-list-item-content>  
                                </v-list-item>  
                            </v-list>  
                        </v-card>    
                    </v-col>   
                    <v-col cols="12" sm="6" md="4" align="center" mx="2">
                        <v-card style="width: 300px; height: 150px; overflow-y: auto">
                            <v-card-title class="headline">
                                Extras:
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                    <v-list-item-content style="text-align: start; padding: 0 40px">
                                        <v-list-item-subtitle>Tipo Sanguíneo: {{ captured.blood_type}}</v-list-item-subtitle>
                                        <v-list-item-subtitle v-show="captured.pending_exam == false">Exame Pendente: Não</v-list-item-subtitle>
                                        <v-list-item-subtitle v-show="captured.pending_exam == true">Exame Pendente: Sim</v-list-item-subtitle>
                                        <v-list-item-subtitle v-show="captured.registration_u == null">Matriculado: Não</v-list-item-subtitle>
                                        <v-list-item-subtitle v-show="captured.registration_u != null">Matriculado: Sim</v-list-item-subtitle>
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
        <v-dialog v-model="dialog_update_user" persistent max-width="700px" >
            <v-card>
                <v-card-title>
                    <span class="headline">Atualizar Cliente</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="client.name" label="Nome completo*" required ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="client.email" label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select  v-model="client.gender" :items="['masculino', 'feminino']" label="Sexo*" required ></v-select>
                            </v-col>
                             <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="client.age"  label="Idade*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="client.blood_type" :items="['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Não Sabe']" label="Tipo Sanguíneo*" required ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="client.cpf" label="CPF*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="client.n_identity" label="Nº Identidade*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model.number="client.n_telephone" label="Nº Telefone*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="client.n_credit_card" label="Nº Cartão de Crédito*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="client.owner_name_credit_card" label="Nome Proprietário*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="client.credit_card_flag" :items="['master-card', 'visa', 'outro']" label="Bandeira*" required ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>'*' Campo Obrigatório.</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_update_user = false">
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog_update_user = false, updateClient(client)">
                        Atualizar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_register_user" persistent max-width="900px" >
            <v-card>
                <v-card-title>
                    <span class="headline">Matricular Cliente</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row align="center">
                            <v-col cols="10" md="2" align="center" >
                                <v-list-item-avatar size="40">
                                        <v-img v-show="client.gender == 'masculino'" src="../assets/Male-Avatar.svg"/>
                                        <v-img v-show="client.gender == 'feminino'" src="../assets/Female-Avatar.svg"/>
                                </v-list-item-avatar>  
                            </v-col>   
                            <v-col cols="10" md="4" align="start">
                                <v-list two-line subheader class="ml-n8">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ client.name }}</v-list-item-title>
                                            <v-list-item-subtitle>{{ client.email }}</v-list-item-subtitle>
                                        </v-list-item-content>  
                                    </v-list-item>  
                                </v-list>    
                            </v-col> 
                        </v-row>    
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model.number="register_data.register_number" label="Numero de Matrícula*" placeholder="AAAAMMDD" required ></v-text-field>
                            </v-col>
                        </v-row>
                        <div class="text-center">
                            <p>Defina quantidade de planos do cliente:</p>
                            <v-rating v-model="rating" :length="length" background-color="light-blue accent-4" color="light-blue accent-4"></v-rating>
                        </div> 
                        <div>
                            <div>
                                <v-list v-for="(index) in rating" :key="index">
                                    <v-card class="mx-auto" width="700" style="height: 200px; overflow-y: auto">
                                        <v-list>
                                            <v-list-group :value="false" v-for="(plan, i) in plans" :key="i" @click="select_plan_type(plan)">
                                                <template v-slot:activator>
                                                    <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                        <div style="width: 100px; padding: 0 4px">    
                                                            <v-list-item-title>Tipo</v-list-item-title>
                                                            <v-list-item-subtitle>{{plan.plan_type}}</v-list-item-subtitle>
                                                        </div>
                                                        <div style="width: 200px; padding: 0 4px">
                                                            <v-list-item-title>Modalidade</v-list-item-title>
                                                            <v-list-item-subtitle>{{plan.modality}}</v-list-item-subtitle>
                                                        </div>
                                                        <div style="width: 300px; padding: 0 4px">
                                                            <v-list-item-title>Quantidade Por Semana</v-list-item-title>                
                                                            <v-list-item-subtitle>{{plan.times_per_week}}</v-list-item-subtitle>
                                                        </div>
                                                    </div>                         
                                                </template>
                                                <div v-show="plan.modality =='swinning'">
                                                    <v-list-item v-for="(title, index) in sw_classes" :key="index" link @click="select_sw_class(title)"> 
                                                        <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                            <div style="width: 100px; padding: 0 4px">    
                                                                <v-list-item-title>Dia:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.day_of_week}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>De:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.start_time}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>Até:</v-list-item-title>                
                                                                <v-list-item-subtitle>{{title.end_time}}</v-list-item-subtitle>
                                                            </div>
                                                        </div>   
                                                    </v-list-item>
                                                </div>   
                                                <div v-show="plan.modality =='crossfit'">
                                                    <v-list-item v-for="(title, index) in cf_classes" :key="index" link @click="select_cf_class(title)">
                                                        <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                            <div style="width: 100px; padding: 0 4px">    
                                                                <v-list-item-title>Dia:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.day_of_week}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>De:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.start_time}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>Até:</v-list-item-title>                
                                                                <v-list-item-subtitle>{{title.end_time}}</v-list-item-subtitle>
                                                            </div>
                                                        </div>   
                                                    </v-list-item>
                                                </div> 
                                                <div v-show="plan.modality =='spinning'">
                                                    <v-list-item v-for="(title, index) in sp_classes" :key="index" link @click="select_sp_class(title)">
                                                       <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                            <div style="width: 100px; padding: 0 4px">    
                                                                <v-list-item-title>Dia:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.day_of_week}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>De:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.start_time}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>Até:</v-list-item-title>                
                                                                <v-list-item-subtitle>{{title.end_time}}</v-list-item-subtitle>
                                                            </div>
                                                        </div>   
                                                    </v-list-item>
                                                </div>    
                                                <div v-show="plan.modality =='rhythm'">
                                                    <v-list-item v-for="(title, index) in rt_classes" :key="index" link @click="select_rt_class(title)">
                                                        <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                            <div style="width: 100px; padding: 0 4px">    
                                                                <v-list-item-title>Dia:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.day_of_week}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>De:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.start_time}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>Até:</v-list-item-title>                
                                                                <v-list-item-subtitle>{{title.end_time}}</v-list-item-subtitle>
                                                            </div>
                                                        </div>   
                                                    </v-list-item>
                                                </div>    
                                                <div v-show="plan.modality =='weight_training'">
                                                    <v-list-item v-for="(title, index) in wt_classes" :key="index" link @click="select_wt_class(title)">
                                                        <div style="display: flex; flex-direction: row; justify-content: space-between">  
                                                            <div style="width: 100px; padding: 0 4px">    
                                                                <v-list-item-title>Dia:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.day_of_week}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>De:</v-list-item-title>
                                                                <v-list-item-subtitle>{{title.start_time}}</v-list-item-subtitle>
                                                            </div>
                                                            <div style="width: 100px; padding: 0 4px">
                                                                <v-list-item-title>Até:</v-list-item-title>                
                                                                <v-list-item-subtitle>{{title.end_time}}</v-list-item-subtitle>
                                                            </div>
                                                        </div>   
                                                    </v-list-item>
                                                </div>        
                                            </v-list-group>
                                        </v-list>
                                    </v-card>    
                                </v-list>
                            </div> 
                        </div>                 
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog_register_user = false, clearRegisterData()">
                        Fechar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog_register_user = false, enroll_client(client)">
                        Matricular
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>     
</template>

<script>
    
	import { mapState, mapActions, mapMutations } from 'vuex'
 
    export default {
        name: 'Dashboard',

        data: () => ({
            captured: {},
            rating: 1,
            length: 3,
            lockSelection: false,
            
            dialog_update_user: false,
            dialog_show_details: false,
            dialog_delete: false,
            dialog_new_user: false,
            dialog_register_user: false,
            overlay: true,
        }),

        computed: {
            ...mapState(['list_clients', 'new_client', 'user', 'client', 'register_data', 'plans', 'cf_classes', 'sw_classes', 'sp_classes', 'wt_classes', 'rt_classes']),

        },
    
        methods: {
            getDataClient(obj) {
                this.captured = {...obj}
            },

            ...mapMutations(['clearRegisterData']),

            ...mapActions(['newClient','removeClient', 'getClient', 'updateClient', 'showAllPlans', 'show_rt_Classes', 'show_cf_Classes', 'show_wt_Classes', 'show_sw_Classes', 'show_sp_Classes', 'select_plan_type', 'select_cf_class', 'select_rt_class', 'select_wt_class', 'select_sw_class', 'select_sp_class', 'enroll_client'])
        },

        mounted() {
            setTimeout(() => { this.overlay = false}, 2000)
            this.$store.dispatch('getAllClients', 'showAllPlans', 'show_rt_Classes', 'show_cf_Classes', 'show_wt_Classes', 'show_sw_Classes', 'show_sp_Classes')
        }
    }
</script>
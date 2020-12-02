<template>
    <v-app>
        <v-main style="padding: 0">
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 light-blue--text text text--accent-4">Bem Vindo a Virtus!</h1>
                                                <div class="text-center" mt-4>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-google-plus-g</v-icon>
                                                    </v-btn>  
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-linkedin-in</v-icon>
                                                    </v-btn>      
                                                </div>    
                                                <h4 class="text-center mlt-4">Insira seu login para acessar.</h4>
                                                <v-form>
                                                    <v-text-field
                                                    v-model="auth.login"
                                                    label="Login"
                                                    name="login"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="light-blue accent-4"
                                                    />
                                                    <v-text-field
                                                    v-model="auth.password"
                                                    label="Password"
                                                    name="Password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="light-blue accent-4"
                                                    />
                                                </v-form>
                                                <h3 class="text-center mt-3">Esqueceu sua senha?</h3>    
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <v-btn rounded color="light-blue accent-4" dark type="submit" @click="Authenticate"> ENTRAR</v-btn> 
                                            </div>    
                                        </v-col>
                                        <v-col cols="12" md="4" class="light-blue accent-4">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Olá, Clientes !</h1>
                                                <h5 class="text-center">Já possui cadastro prévio? Se sim entre com o seu email pessoal e crie a seu login e senha!</h5>
                                            </v-card-text> 
                                            <div class="text-center">
                                                <v-btn rounded outlined="" dark @click="step++">Cadastro</v-btn>
                                            </div>       
                                        </v-col>
                                    </v-row>    
                                </v-window-item>    
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="light-blue accent-4">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Bem Vindo de Volta!</h1>
                                                <h5 class="text-center">Crie um conexão com nós finalizando seu cadastro para ter acesso a Virtus</h5>
                                            </v-card-text>  
                                            <div class="text-center mt-4">
                                                <v-btn rounded outlined dark @click="step--">Voltar</v-btn>
                                            </div>     
                                        </v-col>    
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 light-blue--text text--accent-4">Cria sua conta</h1>
                                                <div class="text-center mt-4">
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-google-plus-g</v-icon>
                                                    </v-btn>  
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-linkedin-in</v-icon>
                                                    </v-btn>     
                                                </div>
                                                <h4 class="text-center mlt-4">Insira seu email e crie seu login.</h4>
                                                <v-form>
                                                    <v-text-field
                                                    v-model="validate.email"
                                                    label="Email"
                                                    name="Email"
                                                    prepend-icon="email"
                                                    type="text"
                                                    color="light-blue accent-4"
                                                    />
                                                    <v-text-field
                                                    v-model="validate.login"
                                                    label="Login"
                                                    name="login"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="light-blue accent-4"
                                                    />
                                                    <v-text-field
                                                    v-model="validate.password"
                                                    label="Password"
                                                    name="Password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="light-blue accent-4"
                                                    />
                                                </v-form>    
                                            </v-card-text>
                                            <div class="text-center mt-n5">
                                                <v-btn rounded color="light-blue accent-4" dark type="submit" @click="createLogin">CRIAR</v-btn>
                                            </div>       
                                        </v-col>   
                                    </v-row>     
                                </v-window-item>  
                            </v-window>   

                        </v-card>   
                    </v-col>    
                </v-row>    
            </v-container>    
        </v-main>    
    </v-app>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        
        data: () => ({
            step: 1,
        }),
        
        computed: {
            ...mapState(['auth', 'validate']),
        },

        props: {
            source: String
        },

        methods: {
            ...mapMutations(['show']),

            ...mapActions(['Authenticate', 'createLogin', 'clearState'])
        }  
    }
</script>
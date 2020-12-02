<template>
    <v-container class="spacing-playground py-9 px-12" fluid>
        <div id="container_plan">
            <v-card class="mx-auto" max-width="220">
                <v-img src="../assets/Swinning.svg" width="220px" height="140px"/>

                <v-card-title>
                    Natação
                </v-card-title>

                <v-card-subtitle>
                    Refresque e exercite-se
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Veja
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show_sw = !show_sw">
                        <v-icon>{{ show_sw ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show_sw">
                        <v-divider></v-divider>

                        <v-card-text>
                            Com planos a partir de 215,00 mensais você poderá ter acesso ao melhor suporte e benefício de uma academia preparada para aulas de natação.
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
            <v-card class="mx-auto" max-width="220">
                <v-img src="../assets/Rhythm.svg" width="220px" height="140px"/>

                <v-card-title>
                    Dança
                </v-card-title>

                <v-card-subtitle>
                    Soe e divirta-se
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Veja
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show_rh = !show_rh">
                        <v-icon>{{ show_rh ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show_rh">
                        <v-divider></v-divider>

                        <v-card-text>
                            Com planos a partir de 155,00 mensais você poderá ter acesso ao melhor suporte e benefício de uma academia preparada para aulas de dança.
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
            <v-card class="mx-auto" max-width="220">
                <v-img src="../assets/Spinning.svg" width="220px" height="140px"/>

                <v-card-title>
                    Spinning
                </v-card-title>

                <v-card-subtitle>
                    Corra e desafie
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Veja
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show_sp = !show_sp">
                        <v-icon>{{ show_sp ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show_sp">
                        <v-divider></v-divider>

                        <v-card-text>
                            Com planos a partir de 115,00 mensais você poderá ter acesso ao melhor suporte e benefício de uma academia preparada para aulas de Spinning.
                        </v-card-text>    
                    </div>
                </v-expand-transition>
            </v-card>
            <v-card class="mx-auto" max-width="220">
                <v-img src="../assets/WeightTraining.svg" width="220px" height="140px"/>

                <v-card-title>
                    Musculação
                </v-card-title>

                <v-card-subtitle>
                    Levante e ganhe
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Veja
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show_wt = !show_wt">
                        <v-icon>{{ show_wt ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show_wt">
                        <v-divider></v-divider>

                        <v-card-text>
                            Com planos a partir de 125,00 mensais você poderá ter acesso ao melhor suporte e benefício de uma academia preparada para aulas de muculação.
                        </v-card-text>    
                    </div>
                </v-expand-transition>
            </v-card>
            <v-card class="mx-auto" max-width="220">
                <v-img src="../assets/Crossfit.svg" width="220px" height="140px"/>

                <v-card-title>
                    Crossfit
                </v-card-title>

                <v-card-subtitle>
                    Queime e limite-se
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Veja
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show_cf = !show_cf">
                        <v-icon>{{ show_cf ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show_cf">
                        <v-divider></v-divider>

                        <v-card-text>
                            Com planos a partir de 215,00 mensais você poderá ter acesso ao melhor suporte e benefício de uma academia preparada para aulas de Crossfit.
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </div>
    </v-container>    
</template>

<script>
    export default {
        name: 'Plans',
        
        data: () => ({
            show_sp: false,
            show_sw: false,
            show_cf: false,
            show_wt: false,
            show_rh: false,
        })
    }
</script>

<style>
    #container_plan {
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }

</style>
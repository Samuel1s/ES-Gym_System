<template>
    <v-container class="spacing-playground py-9 px-12" fluid>
        <div id="container"> 
            <div>
                <div class="align-content">
                    <v-img />
                    <h1>{{ welcome }}</h1>
                </div>
                    
                <div class="align-content">
                    <h1>{{ msg1 }}<br>{{ msg2 }}</h1>
                    <v-btn depressed color="primary" class="spacing-playground my-3 mx-0">
                        Conheça a Virtus
                    </v-btn>  
                </div>  
            </div>
            <div>
                <p>Ou baixe o APP e <strong>acompanhe suas atividades.</strong></p>
                <div class="align-button">
                    <v-btn text>
                        <div class="google-badge">
                            <v-img alt="Google Play" src="../assets/google-play-badge.png" />
                        </div>    
                    </v-btn>
                    <v-btn text>
                        <div class="apple-badge">
                            <v-img alt="App Store" src="../assets/app-store-badge.png" />
                        </div>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="float-md-left">
        </div>        
    </v-container>
</template>

<script>
    export default {
        name: 'HelloWorld',

        data: () => ({
            welcome: "Virtus",
            msg1: "A virtus é a academia ideal para você",
            msg2: "que busca um corpo perfeito"
        }),
    }
</script>

<style>
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        color: aliceblue
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 10px solid rgba(255,255,255,.5);
        background: rgba(255,255,255,.5)
    }

    .align-content {
        margin: 24px 0;
        text-align: center
    }

    .align-button {
        text-align: center
    }

    .google-badge {
        display: flex;
        align-items: center;
        width: 100px;
        height: 50px
    }

    .apple-badge {
        display: flex;
        align-items: center;
        width: 80px;
        height: 50px
    }
</style>


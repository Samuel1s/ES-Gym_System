import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router/index'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const API_URL = "http://localhost:8000"

var resultado = ''

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],

    state: {
        // Secretary datas.
        list_clients: [],
        new_client: {},
        client: {},
        plans: [],
        cf_classes: [],
        sw_classes: [],
        sp_classes: [],
        wt_classes: [],
        rt_classes: [],

        register_data: {
            register_number: 0,
            plans: [],
            rhythm: [],
            swinning: [],
            crossfit: [],
            spinning: [],
            weightTraining: []
        },
        
        // Doctor datas.
        patients: [],
        list_imc: [],
        patient: {},
        patient_exam: {},

        // Teacher datas.
        pupils: [],
        pupil: {},

        // Login and Authenticate
        user: {},
        auth: {
            login: '',
            password: '' 
        },
        validate: {
            email: '',
            login: '',
            password: ''
        }
    },

    getters: {},

    mutations: {
        // Auth and Sign in Mutations.
        success(state, data ) {
            state.user = data 

            if (state.user.profile_u) {
                router.push('/userDashboard')
            }

            else if (state.user.profile_s) {
                router.push('/secretaryDashboard')
            } 

            else if (state.user.profile_d) {
                router.push('/doctorDashboard')    
            }

            else if (state.user.profile_t) {
                router.push('/teacherDashboard')   
            }
                      
        },

        created(data) {
            if (data) {
                resultado = window.confirm("Usuário criado com sucesso!")

                if (resultado) { 
                    router.push('/')
                }
            }
        },
        
        // Secretary Mutations.
        listClients(state, data) {
            state.list_clients = data
        },

        getOneClient(state, data) {
            state.client = data
        },

        listPlans(state, data) {
            state.plans = data
        },

        listCfClasses(state, data) {
            state.cf_classes = data
        },

        listSwClasses(state, data) {
            state.sw_classes = data
        },

        listSpClasses(state, data) {
            state.sp_classes = data
        },

        listWtClasses(state, data) {
            state.wt_classes = data
        },

        listRtClasses(state, data) {
            state.rt_classes = data
        },

        setPlansChoiced(state, data) {
            state.register_data.plans.push(data)
        },

        setRtClassChoiced(state, data) {
            state.register_data.rhythm.push(data)
        },

        setCfClassChoiced(state, data) {
            state.register_data.crossfit.push(data)
        },

        setSwClassChoiced(state, data) {
            state.register_data.swinning.push(data)
        },

        setSpClassChoiced(state, data) {
            state.register_data.spinning.push(data)
        },

        setWtClassChoiced(state, data) {
            state.register_data.weightTraining.push(data)
        },

        // Doctor Mutations.
        listPatients(state, data) {
            state.patients = data
        },
         
        listIMC(state, data) {
            state.list_imc = data
        },

        getOnePatient(state, data) {
            state.patient = data
        },

        // Teacher Mutations.
        listPupils(state, data) {
            state.pupils = data
        },
        
        // System Mutations.
        refresh(state) {
            state.register_data.register_number = 0,
            state.register_data.plans = [],
            state.register_data.rhythm = [],
            state.register_data.swinning = [],
            state.register_data.crossfit = [],
            state.register_data.spinning = [],
            state.register_data.weightTraining = []
            location.reload()
        },

        clearState(state) {
            state.new_client = {},
            state.user = {},
            state.auth = {},
            state.validate= {}
        }, 

        clearRegisterData(state) {
            state.register_data.register_number = 0,
            state.register_data.plans = [],
            state.register_data.rhythm = [],
            state.register_data.swinning = [],
            state.register_data.crossfit = [],
            state.register_data.spinning = [],
            state.register_data.weightTraining = []
        }
    },

    actions: { 
        // Auth and SingIn Actions.
        async Authenticate( {commit} ) {
            const url = `${API_URL}/access`

            try {
                const response = await Vue.axios.post(url, this.state.auth)
                commit('success', response.data) 

            } catch (e) {
                alert("Usuário não cadastrado.")

            } 
        },

        async createLogin( {commit} ) {
            const url = `${API_URL}/create_profile/${this.state.validate.email}`

            try {
                const response = await Vue.axios.post(url, this.state.validate)
                commit('created', response.data)

            } catch (e) {
                alert("O usuário não possui cadastro prévio.")
            } 
        },
        
        // Secretary Actions.
        async getAllClients({ commit }) {
            const url =  `${API_URL}/admin/list_users`

            try {
                const response = await Vue.axios.get(url)
                commit('listClients', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async newClient({commit}) {
            const url =  `${API_URL}/admin/create_user`

            try {
                const response = await Vue.axios.post(url, this.state.new_client)

                if (response)
                    commit('refresh')
   
            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async removeClient({commit}, value) {
            const url =  `${API_URL}/admin/delete_user/`

            try {
                const response = await Vue.axios.delete(`${url}${value.id}`)
                
                if (response)
                    commit('refresh')
    
            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async getClient({commit}, value) {
            const url =`${API_URL}/admin/get_user/`

            try {
                const response = await Vue.axios.get(`${url}${value.id}`)
                commit('getOneClient', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async updateClient({commit}, value) {
            const url =`${API_URL}/admin/update_user/`

            try {
                const response = await Vue.axios.put(`${url}${value.id}`, value)

                if (response)
                    commit('refresh')

            } catch (e) {
                alert("Erro inesperado")
            }
        }, 

        async showAllPlans({commit}) {
            const url =`${API_URL}/admin/list_plans`

            console.log("clicou")

            try {
                const response = await Vue.axios.get(url)
                commit('listPlans', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async show_rt_Classes({commit}) {
            const url = `${API_URL}/admin/show_rt_classes`

            try {
                const response = await Vue.axios.get(url)
                commit('listRtClasses', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async show_cf_Classes({commit}) {
            const url = `${API_URL}/admin/show_cf_classes`

            try {
                const response = await Vue.axios.get(url)
                commit('listCfClasses', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async show_sw_Classes({commit}) {
            const url = `${API_URL}/admin/show_sw_classes`

            try {
                const response = await Vue.axios.get(url)
                commit('listSwClasses', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async show_sp_Classes({commit}) {
            const url = `${API_URL}/admin/show_sp_classes`

            try {
                const response = await Vue.axios.get(url)
                commit('listSpClasses', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async show_wt_Classes({commit}) {
            const url = `${API_URL}/admin/show_wt_classes`

            try {
                const response = await Vue.axios.get(url)
                commit('listWtClasses', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_plan_type({commit}, choice) {
            const url = `${API_URL}/admin/select_plan_type/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setPlansChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_rt_class({commit}, choice) {
            const url = `${API_URL}/admin/select_rt_class/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setRtClassChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_cf_class({commit}, choice) {
            const url = `${API_URL}/admin/select_cf_class/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setCfClassChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_sw_class({commit}, choice) {
            const url = `${API_URL}/admin/select_sw_class/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setSwClassChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_sp_class({commit}, choice) {
            const url = `${API_URL}/admin/select_sp_class/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setSpClassChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async select_wt_class({commit}, choice) {
            const url = `${API_URL}/admin/select_wt_class/`

            try {
                const response = await Vue.axios.get(`${url}${choice.id}`)
                commit('setWtClassChoiced', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async enroll_client({commit}, value) {
            const url = `${API_URL}/admin/register_user/`
            console.log(this.state.register_data)
            console.log(value)

            try {
                const response = await Vue.axios.post(`${url}${value.id}`, this.state.register_data)
                
                if (response)
                    alert('Usuário matriculado ')
                    commit('refresh')

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        //Doctor Actions
        async getAllPatients({ commit }) {
            const url =  `${API_URL}/admin/list_all_exams`

            try {
                const response = await Vue.axios.get(url)
                commit('listPatients', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async showIMC({ commit }) {
            const url =  `${API_URL}/admin/show_imc`

            try {
                const response = await Vue.axios.get(url)
                commit('listIMC', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async getPatient({commit}, value) {
            const url =`${API_URL}/admin/get_patient/`

            try {
                const response = await Vue.axios.get(`${url}${value.id}`)
                commit('getOnePatient', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }

        },

        async validateExam({commit}, value) {
            const url =`${API_URL}/admin/update_user_exam/`

            try {
                const response = await Vue.axios.put(`${url}${value.id}`, value)

                if (response)
                    commit('refresh')

            } catch (e) {
                alert("Erro inesperado")
            }
        }, 

        //Teacher Actions: 
        async getAllPupils({ commit }) {
            const url =  `${API_URL}/admin/list_all_pupils`

            try {
                const response = await Vue.axios.get(url)
                commit('listPupils', response.data)

            } catch (e) {
                alert("Erro inesperado")
            }
        },

        async setWorkOut ({commit}, value) {
            const url =`${API_URL}/admin/set_workout/`

            try {
                const response = await Vue.axios.put(`${url}${value.id}`, value)

                if (response)
                    commit('refresh')

            } catch (e) {
                alert("Erro inesperado")
            }
        }

    },

    modules: {
    }
})

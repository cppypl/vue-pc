import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
      
        userinfo:[]
    },
    mutations:{
        login(state,data){
            state.userinfo=data
        },
        logout(state){
            state.userinfo=[]

        }
    },
})


export default store
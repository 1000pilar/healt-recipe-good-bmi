import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{

  },
  getters: {

  },
  mutations: {
    // fillSignUp(state, list){
    //   console.log('ini list', list);
    //   state.name = list.name
    //   state.username = list.username
    //   state.passowrd = list.password
    //   state.email = list.email
    // }
  },
  actions: {
    signUp : function ({commit}, payload){
      // console.log('ini di store', payload);
      // alert(payload.name)
      axios.post('http://localhost:3000/users/signup', {
        name: payload.name,
        username: payload.username,
        password: payload.password,
        email: payload.email
      })
      .then((response)=>{
        if (response.data.errmsg){
          alert(response.data)
          this.$router.push('/signup')
        } else {
          this.$router.push('/')
        }

      })
      .catch((err)=>{
        console.log(err);
      })
    },
    bmi: function({commit}, payload) {
      axios.post('http://localhost:3000/bmi', {
        weight: payload.weight,
        height: payload.height,
        sex: payload.sex,
        age: payload.age
      })
      .then((response)=>{
        if (response.data.errmsg){
          alert(response.data.errmsg)
          this.$router.push('/signup')
        } else {
          this.$router.push('/')
        }

      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
})

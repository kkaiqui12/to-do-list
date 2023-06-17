import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas:[
      {id:1, titulo:"Ir ao mercados", concluido: false},
      {id:2, titulo:"Comprar Ração", concluido: false},
    ]
  },
  getters: {
  },
  mutations: {
    adcionarTarefa(state, titulo){
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
       
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

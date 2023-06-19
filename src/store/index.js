import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas: [
      { id: 1, titulo: "Ir ao mercados", concluido: false },
      { id: 2, titulo: "Comprar Ração", concluido: false },
    ]
  },
  getters: {
  },
  mutations: {
    adcionarTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })

      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    editaTarefa(state, novaTarefa) {

      let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      tarefa.titulo = novaTarefa.titulo;
      console.log(tarefa)
    }
  },
  actions: {
  },
  modules: {
  }
})

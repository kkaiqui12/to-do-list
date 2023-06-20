import { createStore } from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

export default createStore({
  state: {
    tarefas: [
    ]
  },
  getters: {
  },
  mutations: {
    buscaTarefas(state) {
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },
    adcionarTarefa(state, titulo) {

      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    editaTarefa(state, novaTarefa) {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo
      })
    }
  },
  actions: {
    async adcionarTarefa({ commit }, titulo) {
      await commit('adcionarTarefa', titulo)
      await commit('buscaTarefas')
    },
    editaTarefa({ commit }, novaTarefa) {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo
      }).then(() => {
        commit('buscaTarefas')
      })
    },
    concluiTarefa({ commit }, novaTarefa) {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        concluido: !novaTarefa.concluido
      }).then(() => {
        commit('buscaTarefas')
      })
    },
    removeTarefa({ commit }, id) {
      db.collection('tarefas').doc({ id }).delete().then(() => {
        commit('buscaTarefas')
      })
    }
  },
  modules: {
  }
})

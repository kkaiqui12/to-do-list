<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="green-lighten-1" icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-btn variant="text" @click="editando()">
            <v-icon icon="mdi-square-edit-outline"></v-icon>
            Editar
          </v-btn>
          <v-btn variant="text" @click="excluindo()">
            <v-icon icon="mdi-delete"></v-icon>
            Excluir
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar v-if="items[0].modal" @fechaModal="fechar()" :tarefa="tarefa" />
    <ModalExcluir v-if="items[1].modal" @fechaModal="fecharExcluir()" :tarefa="tarefa" />
  </div>
</template>

<script>
import ModalEditar from "@/components/tarefas/modal/ModalEditar.vue"
import ModalExcluir from "@/components/tarefas/modal/ModalExcluir.vue"

export default {
  props: ['tarefa'],
  components: {
    ModalEditar,
    ModalExcluir
  },
  data: () => ({
    items: [
      {
        icone: "mdi-square-edit-outline",
        title: 'Editar',
        modal: false
      },
      {
        icone: "mdi-delete",
        title: 'Excluir',
        modalExcluir: false
      },
    ],
  }),
  methods: {
    editando() {
      this.items[0].modal = !this.items[0].modal
    },
    fechar() {
      this.items[0].modal = false
    },
    excluindo() {
      this.items[1].modal = !this.items[1].modal
    },
    fecharExcluir() {
      this.items[1].modal = false
    }
  }
}
</script>
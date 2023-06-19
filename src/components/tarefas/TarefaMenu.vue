<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="green-lighten-1" icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="editando()"
              >
              
                <v-btn variant="text">
                    <v-icon>{{ item.icone }}</v-icon>
                    {{ item.title }}
                </v-btn>
              </v-list-item>
            </v-list>
        </v-menu>
      <ModalEditar 
      v-if="items[0].modal"
      @fechaModal="fechar()"
      :tarefa="tarefa"
      />
    </div>
</template>

<script>
import ModalEditar from "@/components/tarefas/modal/ModalEditar.vue"

export default {
  props:['tarefa'],
    components: {
      ModalEditar
    },
    data: () => ({
      items: [
        { 
          icone:"mdi-square-edit-outline", 
          title: 'Editar', 
          modal: false
        },
        { 
          icone:"mdi-delete", 
          title: 'Excluir',
          excluindo() {
            console.log("excluir")
          } 
        },
      ],
    }),
    methods: {
      editando(){
        this.items[0].modal = !this.items[0].modal
      },
      fechar() {
        this.items[0].modal = false
      }
    }
  }
</script>
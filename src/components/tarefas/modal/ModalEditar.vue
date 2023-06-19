<template>
    <div>
        <v-dialog
            v-model="dialog"
            class="mx-auto"
            max-width="500"
           
        >
            <!-- <template v-slot:activator="{ props }">
                <v-btn
                color="primary"
                v-bind="props"
                >
                </v-btn>
            </template> -->
            <v-card>
                <v-card-title align="center">
                    <span>Editar</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field
                            variant="outlined"
                            label="Digite o novo título"
                            v-model="titulo"
                        ></v-text-field>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-row justify="space-around">
                        <v-btn
                            color="red"
                            variant="text"
                            @click="$emit('fechaModal')"
                            >
                            Fechar
                         </v-btn>
                        <v-btn
                            color="green-lighten-1"
                            variant="text"
                            @click="$store.commit('editaTarefa', { titulo, id: tarefa.id})"
                            >
                            Salvar
                        </v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    props: ['tarefa'],
    name: 'ModalEditar',
    data: () => ({
      dialog: true,
      titulo: null
    }),
    
    created() {
        // console.log(this.titulo)
        this.titulo === this.tarefa.titulo
    }
  }
</script>
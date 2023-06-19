<template>
  <div>
    <v-dialog v-model="dialog" class="mx-auto" max-width="500">
      <v-card>
        <v-card-title align="center">
          <span>Tem certeza que deseja excluir a tarefa?</span>
        </v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
          <v-row justify="space-around">
            <v-btn color="red" variant="text" @click="$emit('fechaModal')">
              Cancelar
            </v-btn>
            <v-btn color="green-lighten-1" variant="text" @click="handleDelete()">
              Excluir
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
  }),
  methods: {
    handleDelete() {
      this.$store.dispatch('removeTarefa', this.tarefa.id);
      this.$emit('fechaModal');
    }
  }
}
</script>
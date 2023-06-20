<template>
  <div>
    <v-col cols="12" sn="6">
      <v-text-field v-model="campoInput" label="Digite a Tarefa" prepend-icon="mdi-bike" clearable variant="outlined"
        @keyup.enter="handleAddTarefa"></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campoInput: null,
    }
  },
  methods: {
    handleAddTarefa() {
      this.$store.dispatch('adcionarTarefa', this.campoInput)
      this.campoInput = null;
    }
  }
}
</script>
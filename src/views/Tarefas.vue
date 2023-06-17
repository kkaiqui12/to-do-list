<template>
  <div>
    <v-col cols="12" sn="6">
      <v-text-field
        v-model="campoInput"
        label="Digite a Tarefa"
        prepend-icon="mdi-bike"
        clearable
        variant="outlined"
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item
        multiple
        active-class=""
      >
        <div 
          v-for="tarefa, index in $store.state.tarefas" 
          :key="index"
        >
          <Tarefa
          :tarefa="tarefa"
          />
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Tarefa from '@/components/tarefas/Tarefa.vue'
export default {
  name: 'Tarefas',
  components: {
    Tarefa
  },
  data (){
    return {
      campoInput: null,
    }
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit('adcionarTarefa', this.campoInput)
      this.campoInput = null; 
    }
  } 
}
</script>

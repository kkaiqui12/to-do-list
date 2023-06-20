<template>
  <div>
    <ListaDeTarefas></ListaDeTarefas>
  </div>
</template>

<script>
import ListaDeTarefas from '@/components/tarefas/ListaDeTarefas.vue';

export default {
  name: 'Tarefas',
  components: {
    ListaDeTarefas
  },
  created() {
    this.$store.commit('buscaTarefas');
  },
}
</script>

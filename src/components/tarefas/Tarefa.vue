<template>
    <div>
        <v-list-item :class="{ 'bg-green-lighten-1': tarefa.concluido }" @click="$store.dispatch('concluiTarefa', tarefa)">
            <template v-slot:prepend>
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="tarefa.concluido">
                    </v-checkbox-btn>
                </v-list-item-action>
                <v-list-item-title :class="{ 'text-decoration-line-through': tarefa.concluido }">{{ tarefa.titulo
                }}</v-list-item-title>
            </template>
            <template v-slot:append>
                <TarefaMenu :tarefa="tarefa" />
            </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue'

export default {
    props: ['tarefa'],
    components: { TarefaMenu },
    created() {
        console.log(this.tarefa)
    },
    methods: {
        handleRemoveTarefa(id) {
            this.$store.commit("removeTarefa", id);
        }
    },

}
</script>
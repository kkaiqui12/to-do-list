<template>
    <div>
        <v-dialog v-model="dialog" class="mx-auto" max-width="500">
            <v-card>
                <v-card-title align="center">
                    <span>Editar</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field variant="outlined" label="Digite o novo título" v-model="titulo"></v-text-field>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-row justify="space-around">
                        <v-btn color="red" variant="text" @click="$emit('fechaModal')">
                            Fechar
                        </v-btn>
                        <v-btn color="green-lighten-1" variant="text" @click="handleEditar()">
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
        titulo: ''
    }),
    created() {
        this.titulo = this.tarefa.titulo
    },
    methods: {
        handleEditar() {
            let novaTarefa = {
                titulo: this.titulo,
                id: this.tarefa.id
            }
            this.$store.dispatch('editaTarefa', novaTarefa);
            this.$emit('fechaModal');
        }
    }
}
</script>
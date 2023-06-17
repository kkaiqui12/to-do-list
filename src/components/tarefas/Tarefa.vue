<template>
    <div>
        <v-list-item
        :class="{'bg-blue lighten-4' :tarefa.concluido}"
        @click="tarefa.concluido === !tarefa.concluido"
        >
            <template v-slot:prepend="{}">
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="tarefa.concluido"></v-checkbox-btn>
                </v-list-item-action>
                
                
               
                    <v-list-item-title>{{ tarefa.titulo }}</v-list-item-title>
                
            </template>
            
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
export default {
    props: ['tarefa']
}
</script>
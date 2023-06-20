<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" location="left" class="bg-deep-purple" theme="dark">
      <v-list>
        <div class="d-flex align-center justify-space-around">
          <v-avatar size="80">
            <v-img cover src="./assets/coelho.jpg"></v-img>
          </v-avatar>
        </div>
        <v-list-item lines="two" title="Tarefas do Dia" subtitle="Escolha uma opção abaixo"></v-list-item>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" :value="item" color="green-lighten-1">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat class="text-green-lighten-1" color="deep-purple" density="prominent">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <InputTarefaVue></InputTarefaVue>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import InputTarefaVue from './components/InputTarefa.vue';
const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: 'Tarefas', icon: 'mdi-bike-fast', to: '/' },
      { text: 'Sobre', icon: 'mdi-information-outline', to: '/sobre' }
    ],
  })
}
</script>

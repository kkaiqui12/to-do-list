<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
      
        location="left"
      >
        
        <v-list>
          <v-list-item
            lines="two"
            title="Tarefas do Dia"
            subtitle="Escolha uma opção abaixo"
          ></v-list-item>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            :value="item"
            color="info"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

      
      
    </v-navigation-drawer>

    <v-app-bar
        color="teal-darken-4"
        density="prominent"  
      >
        <template v-slot:image>
          <v-img
            cover
            src="./assets/esporte.jpg"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Tarefas do Dia</v-app-bar-title>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { text: 'Tarefas', icon: 'mdi-bike-fast', to:'/' },
        { text: 'Sobre', icon: 'mdi-information-outline', to:'/sobre' }
      ],
    })
  }
</script>

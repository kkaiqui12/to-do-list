<template>
  <div>
    <h1 class="font-weight-light" align="center">Sobre</h1>

    <div>
      <p class="font-weight-light" align="center">
        Meu primeiro projeto usando Vue 3.
      </p>
      <p class="font-weight-light" align="center">
        Demorei alguns dias para desenvolve-lo, mas com muito esforço consegui concluir.
      </p>
      <p class="font-weight-light" align="center">
        Abaixo teremos algumas das ferramentas que foram utilizadas.
        <br>
        Caso queira saber um pouco sobre elas, click nos botões com seus nomes,
        <br>
        com isso você será direcionado para o site
        <br>
        oficial com as documentações sobre a ferramenta.
      </p>
      <br>
      <div>
        <v-row justify="center">
          <v-btn @click="html" class="ma-2" color="deep-orange-darken-2">
            <v-icon start icon="mdi-language-html5"></v-icon>
            Html
          </v-btn>
          <v-btn @click="vue3" class="ma-2" color="green-accent-2">
            <v-icon start icon="mdi-vuejs"></v-icon>
            Vue 3
          </v-btn>
          <v-btn @click="vuetify" class="ma-2" color="light-blue-darken-1">
            <v-icon start icon="mdi-vuetify"></v-icon>
            Vuetify
          </v-btn>
          <v-btn @click="vuex" class="ma-2" color="green-accent-3">
            <v-icon start icon="mdi-vuejs"></v-icon>
            VueX
          </v-btn>
          <v-btn @click="vueRouter" class="ma-2" color="green-accent-4">
            <v-icon start icon="mdi-vuejs"></v-icon>
            VueRouter
          </v-btn>
        </v-row>
      </div>
      <br>
      <div>
        <v-row justify="center">
          <v-btn @click="localBase" class="ma-2" color="red-darken-4">
            <v-icon start icon="mdi-database"></v-icon>
            LocalBase DB
          </v-btn>
          <v-btn @click="dragAndDrop" class="ma-2" color="blue-grey-darken-1">
            <v-icon start icon="mdi-move-resize"></v-icon>
            Drag and Drop
          </v-btn>
          <v-btn @click="git" class="ma-2" color="red">
            <v-icon start icon="mdi-git"></v-icon>
            Git
          </v-btn>
          <v-btn @click="gitHub" class="ma-2" color="blue-grey-darken-4">
            <v-icon start icon="mdi-github"></v-icon>
            GitHub
          </v-btn>
          <v-btn @click="netlify" class="ma-2" color="teal-lighten-1">
            <v-icon start icon="mdi-web"></v-icon>
            Netlify
          </v-btn>
        </v-row>
      </div>
      <br>
      <div>
        <h1 class="font-weight-light" align="center">Contato</h1>
        <h2 class="font-weight-light" align="center">José Kaiqui Coelho Moraes</h2>
        <h3 class="font-weight-light" align="center">Clique no botões abaixo e entre em contato comigo.</h3>
        <br>
        <v-row justify="center">
          <v-btn @click="gitHubPessoal" class="ma-2" color="grey-darken-2">
            <v-icon start icon="mdi-github"></v-icon>
            GitHub
          </v-btn>
          <v-btn @click="email" class="ma-2" color="blue-darken-4">
            <v-icon start icon="mdi-email-outline"></v-icon>
            E-mail
          </v-btn>
        </v-row>
      </div>
    </div>
    <p class="font-weight-light" align="center">
      <br>
      Agradeço a todos que estão utilizando a to-do-list, em breve teremos novidades.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Sobre',
  methods: {
    html() {
      window.open("https://developer.mozilla.org/pt-BR/docs/Web/HTML", "_blank")
    },
    vue3() {
      window.open("https://vuetifyjs.com/en/introduction/why-vuetify/", "_blank")
    },
    vuetify() {
      window.open("https://developer.mozilla.org/pt-BR/docs/Web/HTML", "_blank")
    },
    vuex() {
      window.open("https://vuex.vuejs.org/guide/", "_blank")
    },
    vueRouter() {
      window.open("https://router.vuejs.org/installation.html", "_blank")
    },
    localBase() {
      window.open("https://www.npmjs.com/package/localbasestorage?activeTab=readme", "_blank")
    },
    dragAndDrop() {
      window.open("https://developer.mozilla.org/pt-BR/docs/Web/HTML", "_blank")
    },
    git() {
      window.open("https://git-scm.com/doc", "_blank")
    },
    gitHub() {
      window.open("https://docs.github.com/pt/get-started", "_blank")
    },
    netlify() {
      window.open("https://docs.netlify.com/", "_blank")
    },
    gitHubPessoal() {
      window.open("https://github.com/kkaiqui12", "_blank")
    },
    email() {
      window.open("mailto:kkaiqui.12@gmail.com?subject=&&b&body=", "_blank")
    }
  }
}
</script>
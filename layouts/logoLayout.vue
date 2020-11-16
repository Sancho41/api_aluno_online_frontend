<template>
  <v-app dark class="layout-container">
    <div class="layout-container">
      <div class="logo">
        <img src="/logo.png" alt="Logo IESB" />
        <div class="title">
          <span>API</span>
          <span>Aluno</span>
          <span>Online</span>
        </div>
        <div class="buttons">
          <div class="buttons">
            <v-btn
              elevation="0"
              color="#fe0000"
              x-large
              href="https://documenter.getpostman.com/view/10262250/TVep97qn"
              target="_blank"
              dark
              >Documentação</v-btn
            >
            <v-btn outlined color="#fe0000" x-large @click="$router.push('/')"
              >Página inicial</v-btn
            >
            <v-btn
              outlined
              color="#24292e"
              x-large
              href="https://github.com/Sancho41/api_aluno_online"
              target="_blank"
              >Github<v-icon>mdi-github</v-icon></v-btn
            >
          </div>
        </div>
      </div>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
</script>

<style scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.5em;
  margin: 50px 0 30px;
}

.title span {
  font-size: 3em;
  font-family: "Teko", sans-serif;
}

.title > span:nth-child(1) {
  color: black;
}
.title > span:nth-child(2) {
  color: gray;
}
.title > span:nth-child(3) {
  color: #ed2241;
}

.buttons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.buttons .v-btn {
  margin: 10px;
}

@media (max-width: 950px) {
  .layout-container {
    flex-direction: column;
    min-height: 0;
  }

  .logo {
    margin-bottom: 50px;
  }

  .logo img {
    display: none;
  }

  .title span {
    font-size: 2.5em;
  }
}
</style>

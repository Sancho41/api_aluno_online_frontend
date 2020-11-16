<template>
  <v-container
    fluid
    style="background: white"
    fill-height
    class="container-main"
  >
    <div class="banner">
      <p>A teoria, prática e um sistema decente!</p>
    </div>

    <div class="body">
      <div class="header">
        <img class="logo" src="/logo.png" alt="Logo IESB" />
        <div class="text">
          <div class="title">
            <span>API</span>
            <span>Aluno</span>
            <span>Online</span>
          </div>

          <div class="buttons">
            <v-btn
              elevation="0"
              color="#fe0000"
              x-large
              href="https://documenter.getpostman.com/view/10262250/TVep97qn"
              target="_blank"
              dark
              >Documentação <v-icon>mdi-document</v-icon></v-btn
            >
            <v-btn
              outlined
              color="#fe0000"
              x-large
              @click="$router.push('/dashboard')"
              >Demo</v-btn
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

      <div class="infos">
        <div class="info-text-container">
          <h3 class="info-title">Segurança</h3>
          <p class="info-text">
            A <strong>APIAlunoOnline</strong> garante ao usuário uma ótima
            segurança em relação às suas credenciais devido ao seu sistema de
            criptografia de senhas.
          </p>
        </div>
        <div class="info-text-container">
          <h3 class="info-title">Padrão REST</h3>
          <p class="info-text">
            Crie sua própria aplicação ou automação utilizando a
            <strong>APIAlunoOnline</strong>.
          </p>
        </div>
        <div class="info-text-container">
          <h3 class="info-title">Open Source</h3>
          <p class="info-text">
            Você também pode contribuir criando <i>pull requests</i> através do
            <a href="https://github.com/Sancho41/api_aluno_online">Github</a>.
          </p>
        </div>
      </div>

      <div class="darker" ref="tecs">
        <h2 class="section-title" :class="passedTecs ? 'no-filter' : ''">
          Tecnologias
        </h2>
        <div class="tec-logos">
          <figure @click="goto('https://kotlinlang.org/')">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg"
              :class="passedTecs ? 'no-filter' : ''"
            />
            <small>kotlin</small>
          </figure>

          <figure @click="goto('https://ktor.io/')">
            <img
              :class="passedTecs ? 'no-filter' : ''"
              src="https://avatars1.githubusercontent.com/u/28214161?s=280&v=4"
            />
            <small>Ktor</small>
          </figure>

          <figure @click="goto('https://vuejs.org/')">
            <img
              :class="passedTecs ? 'no-filter' : ''"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            />
            <small>Vue.js</small>
          </figure>

          <figure @click="goto('https://vuetifyjs.com')">
            <img
              :class="passedTecs ? 'no-filter' : ''"
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png"
            />
            <small>Vuetify</small>
          </figure>

          <figure @click="goto('https://www.jetbrains.com/pt-br/idea/')">
            <img
              :class="passedTecs ? 'no-filter' : ''"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1024px-IntelliJ_IDEA_Logo.svg.png"
            />
            <small>Intellij</small>
          </figure>

          <figure @click="goto('https://www.mongodb.com/')">
            <img
              :class="passedTecs ? 'no-filter' : ''"
              src="https://img.icons8.com/color/452/mongodb.png"
            />
            <small>MongoDB</small>
          </figure>
        </div>
      </div>

      <div class="developers">
        <h2 class="section-title">Desenvolvedores</h2>
        <div class="developers-container">
          <div class="developer" @click="goto('https://github.com/Sancho41')">
            <img src="https://github.com/Sancho41.png?size=200" />
            <p>Gabriel Sancho</p>
          </div>

          <div
            class="developer"
            @click="goto('https://github.com/Vinicius-Andrade1')"
          >
            <img src="https://github.com/Vinicius-Andrade1.png?size=200" />
            <p>Vinícius Andrade</p>
          </div>

          <div class="developer" @click="goto('https://github.com/raulc00')">
            <img src="https://github.com/raulc00.png?size=200" />
            <p>Raul Carneiro</p>
          </div>

          <div
            class="developer"
            @click="goto('https://github.com/emanuelfelipe')"
          >
            <img src="https://github.com/emanuelfelipe.png?size=200" />
            <p>Emanuel Felipe</p>
          </div>
        </div>
      </div>

      <div class="footer darker">
        <p>Criado com ❤️ por programadores para programadores!</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      passedTecs: false,
    };
  },
  mounted() {
    window.onscroll = (event) => {
      const tecs = this.$refs["tecs"].offsetTop;
      const position = window.scrollY;
      const height = window.innerHeight / 2;
      this.passedTecs = position > tecs - height;
    };
  },
  methods: {
    goto(url) {
      console.log({ url });
      window.open(url, "_blank");
    },
  },
  beforeDestroy() {
    window.onscroll = null;
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/index.scss";
</style>

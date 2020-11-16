<template>
  <v-row align="center" style="max-width: 100vw; margin: 0 auto">
    <v-col>
      <v-card width="300" id="card" :loading="loading" elevation="8">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              label="Email"
              v-model="loginForm.email"
              :disabled="loading"
              @keyup.enter="login"
            />
            <v-text-field
              label="Senha"
              v-model="loginForm.senha"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :disabled="loading"
              @keyup.enter="login"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div id="footer">
            <v-btn color="success" @click="login" :disabled="loading"
              >Entrar</v-btn
            >
            <hr style="opacity: 0.2" />
            <small>Ainda não tenho uma conta:</small>
            <v-btn
              :disabled="loading"
              color="primary"
              @click="$router.push('/register')"
              >Registrar</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Notify from "~/plugins/Notify.js";
export default {
  auth: "guest",
  layout: "logoLayout",
  data() {
    return {
      loginForm: {
        email: "",
        senha: "",
      },
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        await this.$auth.loginWith("local", { data: this.loginForm });
        Notify.successToast("Logado com sucesso!");
        this.$router.push("/dashboard");
      } catch (e) {
        const msg =
          e.response?.data?.message || "Não foi possível fazer o login!";
        Notify.error(msg);
        console.error({ e });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#footer hr {
  margin: 10px 0;
}

@media (max-width: 950px) {
  #card {
    margin: 0 auto;
  }
}
</style>

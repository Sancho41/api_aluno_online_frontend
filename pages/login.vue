<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col>
        <v-card width="300" id="card" :loading="loading">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                v-model="loginForm.email"
                :disabled="loading"
              />
              <v-text-field
                label="Senha"
                v-model="loginForm.senha"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :disabled="loading"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div id="footer">
              <v-btn color="success" @click="login" :disabled="loading"
                >Entrar</v-btn
              >
              <hr />
              <a @click="$router.push('/register')"
                >Ainda não tenho uma conta</a
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Notify from "~/plugins/Notify.js";
export default {
  auth: "guest",
  layout: "clean",
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
          e.response.data.detailMessage ||
          "Não foi possível registrar usuário!";
        Notify.error(msg);
        console.error({ e });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
#card {
  margin: 0 auto;
}

#footer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#footer hr {
  margin: 10px 0;
}
</style>

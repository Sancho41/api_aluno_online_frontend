<template>
  <v-row align="center" style="max-width: 100vw; margin: 0 auto">
    <v-col>
      <v-card width="300" id="card" :loading="loading" elevation="8">
        <v-card-title>Registrar</v-card-title>
        <v-card-text>
          <v-form
            ref="register"
            @submit.prevent="register"
            :lazy-validation="true"
            v-model="valid"
          >
            <input style="display: none" />
            <v-text-field
              label="Email"
              v-model="registerForm.email"
              :disabled="loading"
              :rules="registerRules.email"
              type="email"
              autocomplete="new-password"
              @keyup.enter="register"
            />
            <input style="display: none" />
            <v-text-field
              label="Senha"
              v-model="registerForm.senha"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              :disabled="loading"
              :rules="registerRules.senha"
              autocomplete="new-password"
              @keyup.enter="register"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div id="footer">
            <v-btn color="success" @click="register" :disabled="loading"
              >Registrar</v-btn
            >
            <hr style="opacity: 0.2" />
            <small>Já tenho uma conta:</small>
            <v-btn
              :disabled="loading"
              color="primary"
              @click="$router.push('/login')"
              >Login</v-btn
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
      loading: false,
      registerForm: {
        email: "",
        senha: "",
      },
      registerRules: {
        email: [
          (v) => !!v || "O campo E-Mail é obrigatório",
          (v) =>
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "E-mail inválido",
        ],
        senha: [
          (v) => !!v || "O campo Senha é obrigatório",
          (v) => !!(v.length >= 6) || "O deve conter no mínimo 6 caracteres",
        ],
      },
      showPassword: false,
      valid: true,
    };
  },
  methods: {
    async register() {
      const form = this.$refs["register"];
      form.validate();
      await this.$nextTick();
      if (!this.valid) return;

      try {
        this.loading = true;
        await this.$axios.post("/api/auth/register", this.registerForm);
        Notify.successToast("Registrado com sucesso!");
        this.$router.push("/login");
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

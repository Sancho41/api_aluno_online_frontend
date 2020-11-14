<template>
  <v-dialog width="300" v-model="dialog">
    <template v-slot:activator="{ on, attr }">
      <v-btn
        title="Autenticar novamente passando a chave privada"
        v-on="on"
        v-bind="attr"
        color="primary"
        >Autenticar com chave</v-btn
      >
    </template>

    <v-card :loading="loading">
      <v-card-title>Login com chave</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            label="Senha do Sistema"
            v-model="senha"
            :disabled="loading"
            :type="showSenha ? 'text' : 'password'"
            :append-icon="showSenha ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showSenha = !showSenha"
          />
          <v-text-field
            label="Chave"
            v-model="chave"
            :disabled="loading"
            :type="showChave ? 'text' : 'password'"
            :append-icon="showChave ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showChave = !showChave"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="login">Entrar</v-btn>
        <v-btn color="error" @click="dialog = false">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Notify from "~/plugins/Notify";
export default {
  data() {
    return {
      dialog: true,
      senha: "",
      chave: "",
      loading: false,
      showSenha: false,
      showChave: false,
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    clear() {
      this.senha = "";
      this.chave = "";
    },
    async login() {
      const form = {
        email: this.user.email || "",
        senha: this.senha,
        chave: this.chave,
      };
      try {
        this.loading = true;
        const { data } = await this.$axios.post("/api/auth/login", form);
        await this.$auth.setUserToken(data.token);
        this.clear();
        this.dialog = false;
        Notify.successToast("Logado com sucesso!");
      } catch (error) {
        console.log({ error });
        const msg = error.response?.data.detailMessage || "Ocorreu algum erro";
        Notify.error(msg);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>

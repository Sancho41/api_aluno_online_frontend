<template>
  <div>
    <v-dialog width="300" v-model="dialog" :persistent="loading">
      <template v-slot:activator="{ on, attr }">
        <v-btn color="primary" v-on="on" v-bind="attr"
          >Gerar Chave de API</v-btn
        >
      </template>

      <v-card :loading="loading">
        <v-card-title>Gerar Chave de API</v-card-title>
        <v-card-text>
          <v-text-field
            :disabled="loading"
            label="Matrícula"
            hint="Sua matrícula do Aluno Online"
            :persistent-hint="true"
            v-model="generateForm.matricula"
            @keyup.enter="gerar"
          />
          <v-text-field
            :disabled="loading"
            label="Senha"
            hint="Sua senha do Aluno Online"
            :persistent-hint="true"
            v-model="generateForm.senha"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            @keyup.enter="gerar"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="gerar" :disabled="loading"
            >Gerar</v-btn
          >
          <v-btn color="error" @click="dialog = false" :disabled="loading"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog width="300" v-model="dialogKey">
      <v-card>
        <v-card-title>Sua chave de api</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="chave"
            readonly
            hint="Essa chave é única, caso perdida será necessário gerar uma
            nova"
            :persistent-hint="true"
            @click="select"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="fecharDialogKey">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Notify from "~/plugins/Notify";
export default {
  data() {
    return {
      dialog: false,
      dialogKey: false,
      showPassword: false,
      chave: "",
      loading: false,
      generateForm: {
        matricula: "",
        senha: "",
      },
    };
  },
  methods: {
    async gerar() {
      try {
        this.loading = true;
        const { data } = await this.$axios.post(
          "/api/auth/generate",
          this.generateForm
        );
        this.chave = data.chave;
        this.dialog = false;
        this.dialogKey = true;
      } catch (error) {
        const msg = error.response?.data.message || "Ocorreu algum erro!";
        Notify.error(msg, "Não foi possível fazer o login no Aluno Online.");
        console.log({ error });
      } finally {
        this.loading = false;
      }
    },

    fecharDialogKey() {
      this.dialogKey = false;
      this.chave = "";
    },

    select({ target }) {
      target.select();
    },
  },
};
</script>

<style>
</style>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Instruções:</v-card-title>
          <v-card-text>
            <p>Essa aplicação utiliza de autenticação por JWT.</p>
            <p>
              Para mais detalhes acesse a
              <a href="https://documenter.getpostman.com/view/10262250/TVep97qn"
                >Documentação</a
              >.
            </p>
            <p>
              <h2>Atenção!</h2>
              <strong>
                Após gerar a chave, você deverá guardar a mesma. Caso
                for perdida, será necessário criar uma nova chave.
              </strong>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p>
              <strong>Matrícula:</strong>
              {{ user.matricula || "'Matrícula ainda não registrada'" }}
            </p>
            <dialog-form-api-key />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DialogFormApiKey from "~/components/DialogFormApiKey.vue";
export default {
  layout: "appDrawer",
  components: { DialogFormApiKey },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style>
</style>

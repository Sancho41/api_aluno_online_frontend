<template>
  <v-container>
    <v-card>
      <v-card-text>
        <p>Email: {{ user.email }}</p>
        <p>
          Matrícula: {{ user.matricula || "'Matrícula ainda não registrada'" }}
        </p>
        <dialog-form-api-key />
      </v-card-text>
    </v-card>
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

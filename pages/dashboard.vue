<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Instruções:</v-card-title>
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

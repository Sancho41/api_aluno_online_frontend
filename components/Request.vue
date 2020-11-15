<template>
  <v-card :loading="loading">
    <v-card-title>
      <div class="header">
        <span class="teko">{{ title }}</span>
        <v-btn :disabled="loading" color="success" @click="makeRequest"
          >consultar</v-btn
        >
      </div>
      <small><strong>Endpoint:</strong> {{ url }}</small>

      <div class="icon" v-if="data">
        <v-icon @click="show = false" v-if="show">mdi-arrow-up</v-icon>
        <v-icon @click="show = true" v-else>mdi-arrow-down</v-icon>
      </div>
    </v-card-title>
    <v-card-text v-if="show">
      <div v-if="loading" class="circular-progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div v-else>
        <v-data-table
          v-if="this.table && this.data"
          :headers="this.table.headers"
          :items="this.data[this.table.prop]"
        />
        <pre v-else>{{ data }}</pre>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Notify from "~/plugins/Notify";
export default {
  data() {
    return {
      loading: false,
      data: "",
      show: true,
    };
  },
  props: {
    title: String,
    url: String,
    table: Object,
  },
  methods: {
    async makeRequest() {
      try {
        this.loading = true;
        const { data } = await this.$axios.get(this.url);
        this.data = data;
        this.show = true;
      } catch (error) {
        console.log({ error });
        Notify.error(
          "Verifique suas credencias do aluno online e sua chave de api!",
          "Não foi possível acessar recurso"
        );
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.circular-progress {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

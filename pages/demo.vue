<template>
  <v-container>
    <v-row>
      <v-col>
        <dialog-login-with-key />
      </v-col>
    </v-row>

    <v-row v-for="(endpoint, index) in endpoints" :key="index">
      <v-col>
        <request
          :title="endpoint.title"
          :url="endpoint.url"
          :table="endpoint.table"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Request from "~/components/Request.vue";
import DialogLoginWithKey from "~/components/DialogLoginWithKey.vue";
export default {
  layout: "appDrawer",
  components: { Request, DialogLoginWithKey },
  data() {
    return {
      endpoints: [
        {
          title: "Boletim",
          url: "/api/academico/boletim",
          table: {
            headers: [
              { value: "codigo", text: "Código" },
              { value: "nome", text: "Nome" },
              { value: "notaP1", text: "P1" },
              { value: "notaP2", text: "P2" },
              { value: "notaP3", text: "P3" },
              { value: "totalFaltas", text: "Total de Faltas" },
              { value: "cargaHoraria", text: "Carga Horária" },
              { value: "porcentagemFrequencia", text: "Frequência %" },
              { value: "situacao", text: "Situação" },
            ],
            prop: "disciplinas",
          },
        },
        {
          title: "Disciplinas pendentes",
          url: "/api/historico/disciplinas-pendentes",
          table: {
            headers: [
              { value: "serie", text: "Série" },
              { value: "cod", text: "Código" },
              { value: "disciplina", text: "Disciplina" },
              { value: "cargaHoraria", text: "Carga Horaria" },
              { value: "creditos", text: "Creditos" },
            ],
            prop: "disciplinasPendentes",
          },
        },
        { title: "Horário de Aulas", url: "/api/academico/hora_aula" },
      ],
    };
  },
};
</script>

<style>
#header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

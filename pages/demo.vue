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
  components: { Request, DialogLoginWithKey },
  data() {
    return {
      endpoints: [
        {
          title: "Boletim",
          url: "/api/academico/boletim",
          table: {
            headers: [
              { value: "codigo", text: "codigo" },
              { value: "nome", text: "nome" },
              { value: "notaP1", text: "notaP1" },
              { value: "notaP2", text: "notaP2" },
              { value: "notaP3", text: "notaP3" },
              { value: "totalFaltas", text: "totalFaltas" },
              { value: "cargaHoraria", text: "cargaHoraria" },
              { value: "porcentagemFrequencia", text: "porcentagemFrequencia" },
              { value: "situacao", text: "situacao" },
            ],
            prop: "disciplinas",
          },
        },
        {
          title: "Disciplinas pendentes",
          url: "/api/historico/disciplinas-pendentes",
          table: {
            headers: [
              { value: "serie", text: "serie" },
              { value: "cod", text: "cod" },
              { value: "disciplina", text: "disciplina" },
              { value: "cargaHoraria", text: "cargaHoraria" },
              { value: "creditos", text: "creditos" },
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

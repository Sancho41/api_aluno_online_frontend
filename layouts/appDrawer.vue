<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list style="background-color: white">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <img class="logo" src="/logo.png" alt="" />
              <div class="title">
                <span>API</span>
                <span>Aluno</span>
                <span>Online</span>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="$router.push('/dashboard')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item @click="$router.push('/demo')">
          <v-list-item-icon>
            <v-icon>mdi-key</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Demo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />

      <template v-slot:append>
        <v-list>
          <v-divider />
          <v-list-item link @click="logout()">
            <v-list-item-icon>
              <v-icon>mdi-backspace-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar app dark color="#fe0000">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="teko">API Aluno Online</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Notify from "~/plugins/Notify";
export default {
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      Notify.successToast("Usuário deslogado!");
      this.$router.push("/");
    },
  },
  computed: {
    user() {
      const user = this.$auth.user;
      if (!user) this.logout();
      return user;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap");
.title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.title span {
  font-size: 1.8em;
  font-family: "Teko", sans-serif;
}

.title > span:nth-child(1) {
  color: black;
}
.title > span:nth-child(2) {
  color: gray;
}
.title > span:nth-child(3) {
  color: #ed2241;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px;
  display: block;
}
</style>

<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>API Aluno Online</v-toolbar-title>
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
      Notify.successToast("Usario deslogado!");
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

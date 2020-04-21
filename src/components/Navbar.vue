<template>
<nav>
  <v-app-bar
    :dark="getTheme"
    app
  >
    <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span>Algo</span>
      <span class="font-weight-thin">Box</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
      icon
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn 
      icon
    >
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
    <v-btn 
      icon
      @click="toggleTheme"
    >
      <v-icon> {{!getTheme ? 'mdi-brightness-4' : 'mdi-brightness-7'}} </v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    :dark="getTheme"
    v-model="open"
    app
  >
    <v-list>
      <v-subheader>F</v-subheader>
        <template
          v-for="(item, i) in nav"
        >
        <v-list-item
          :key="i"
          @click="moveTo(item.to)"
          v-show="item.display ? true : (item.login ? getTheme : !getTheme)"
        >
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  
  computed: {
    ...mapGetters(['getTheme'])
  },

  methods: {
    ...mapActions(['toggleTheme']),
    moveTo(to) {
      if(this.$router.currentRoute.path != to) {
        this.$router.replace({path: to})
      }
    }
  },

  data: () => ({
    open: false,
    nav: [
      {name: "Home", to: "/", icon: "mdi-home", display: true},
      {name: "Dashboard", to: "/dashboard", icon: "mdi-view-dashboard", login: true},
      {name: "About", to: "/about", icon: "mdi-webpack", display: true},
      {name: "Login", to: "/login", icon: "mdi-login-variant", login: false},
      {name: "Logout", to: "/login", icon: "mdi-login-variant", login: true},
    ],
  }),
}
</script>
<style>

</style>
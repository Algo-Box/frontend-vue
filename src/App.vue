<template>
  <v-app>
    <Navbar></Navbar>
    <v-content :class="`${!getTheme ? 'whte' : 'blk'}`">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar,    
  },

  methods: {
    ...mapActions(['init'])
  },

  created() {
    this.init(); 
  },

  computed: {
    ...mapGetters(['getTheme'])
  },

  data: () => ({
    theme: 'whte'
  }),
};
</script>

<style scoped>
  
  .blk {
    background-color: grey;
  }

  .whte {
    background-color: rgb(207, 203, 203);
  }

</style>
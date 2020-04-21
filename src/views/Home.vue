<template>
  <v-container>
    <v-col
      v-for="(item, i) in blog"
      :key="i"
      v-show="!loading"
    >
      <v-card
        :dark="getTheme"
      >
        <v-card-text>
          <div class="title font-weight-bold">
            {{ item.title }}
          </div>
          <div class="font-weight-thin">
            Author: Abhishek
          </div>
          <div class="body-2">
            {{ item.body }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-row
      v-show="loading"
      class="justify-center mt-10"
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },

  async mounted() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.blog = res.data;
    this.loading = false;
  },
  
  data: () => ({
    blog: [],
    loading: true
  }),
  computed: {
    ...mapGetters(['getTheme'])
  }
}
</script>

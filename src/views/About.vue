<template>
  <div>  
    <h1>This is an about page</h1>
    <v-container>
      <v-card class="pa-3 grey lighten-1">
        <v-layout row wrap class="mx-4">
          <v-flex xs12 md6>
            <div class="caption teal--text">Title</div>
            <div>Create Wb</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Person</div>
            <div>Abhiy13</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">DD</div>
            <div>2000</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption">Status</div>
            <div>OG</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
  } 
}
</script>

<style scoped>
.caption {
  font-weight: lighter important;
  font-family: 'Courier New', Courier, monospace important;
}
</style>

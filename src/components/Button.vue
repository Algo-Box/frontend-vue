<template>
  <v-btn 
    icon
    class="hidden-sm-and-down"
    @click="toggleTheme"
  >
    <v-icon> {{!getTheme ? 'mdi-brightness-4' : 'mdi-brightness-7'}} </v-icon>
  </v-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>
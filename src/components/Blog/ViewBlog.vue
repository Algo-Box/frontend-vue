<template>
  <div class="content-preview ql-snow">
    <div class="ql-editor content" v-html="content"></div>
  </div> 
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export default {
  created() {
    this.content = sessionStorage.getItem('preview-item');
    console.log(this.content);
  }
}
</script>

<style>

.content-preview {
  padding: 4rem;
}

.content{
  border-style: solid;
  padding: 2rem;
  box-shadow: 0.2rem;
}

</style>
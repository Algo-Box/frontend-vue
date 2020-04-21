<template>
<div class="editor">
  <span>Enter Title:</span>
  <input v-model="title" class="ma-1 input pl-1 pr-1">
  <br><br> 
  <quill-editor
    ref="myTextEditor"
    v-model="content"
    class="editor-main"
  >
  </quill-editor>
  <br>
  <v-btn @click="save" class="ma-1">Save</v-btn>
  <v-btn @click="preview" class="ma-1">Preview</v-btn>
</div>
</template>

<script>
import hljs from 'highlight.js';
import { quillEditor } from 'vue-quill-editor';

import 'highlight.js/styles/tomorrow.css';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export default {
  name: 'editor',

  components: {
    quillEditor
  },

  data: () => ({
    content: '<h1>Enter Content Here<h1>',
    title: 'test'
  }),

  methods: {
    save() {
      console.log(this.content);
    },
    preview() {
      sessionStorage.setItem('preview-item', this.content);
      window.open('/viewBlog');
    }
  },

  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },

  mounted() {
    // console.log(this.editor);
  }
}
</script>

<style scoped>

.editor {
  padding: 4rem;
}

.editor-main {
  background-color: grey;
}

.input {
  border-style: solid;
}

</style>
<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon>mdi-format-bold</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon>mdi-format-italic</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <v-icon>mdi-format-strikethrough</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline;"
        >
          <v-icon>mdi-format-underline</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <v-icon>mdi-code-tags</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <v-icon>mdi-format-paragraph</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <v-icon>mdi-format-header-1</v-icon>
          
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <v-icon>mdi-format-header-2</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <v-icon>mdi-format-header-3</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <v-icon>mdi-format-list-bulleted</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <v-icon>mdi-format-list-numbered</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <v-icon>mdi-format-quote-open</v-icon>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <v-icon>mdi-code-braces</v-icon>
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <v-icon>mdi-format-page-break</v-icon>
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <v-icon>mdi-undo-variant</v-icon>
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <v-icon>mdi-redo-variant</v-icon>
        </button>

      </div>
    </editor-menu-bar>
    <editor-content
      :editor="editor"
      class="editor-body"
      @keyup.tab.prevent
    ></editor-content>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'


export default {

  components: {
    EditorContent,
    EditorMenuBar,
  },

  mounted() {

  },

  methods: {
    handleKeypress(e) {
      console.log(e);
      if(e.keyCode == 9) {
        e.preventDefault();
      }
    }
  },

  data: () => ({
    editor: new Editor({
      extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
    }),
  }),

  beforeDestroy() {
    this.editor.destroy();
  }
}
</script>

<style scoped>
  .editor {
    padding: 4rem;
  }

  .editor-body {
    border-style: solid;
    padding: 1rem;
    background-color: rgb(177, 159, 159);
    line-height: 1.6 !important;
  }

  .menubar__button {
    align-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .menubar {
    border-style: solid;
    padding: 1rem;
  }

  code {
    background-color: black;
  }

</style>
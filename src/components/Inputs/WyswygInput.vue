<template>
<div class="mb-3">
    <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
    <div class="">
      <div col-12 v-if="editor">
        <div class="btn-group" role="group">

        <button @click="editor.chain().focus().toggleBold().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('bold'),  }">
          <i class="bi bi-type-bold"></i>
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('italic') }">
          <i class="bi bi-type-italic"></i>
        </button>
        <!-- <button @click="editor.chain().focus().toggleStrike().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('strike') }">
          <i class="bi bi-type-strikethrough"></i>
        </button> -->
        <button @click="editor.chain().focus().toggleCode().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('code') }">
          <i class="bi bi-code"></i>
        </button>
        <!-- <button @click="editor.chain().focus().unsetAllMarks().run()">
          clear marks
        </button>
        <button @click="editor.chain().focus().clearNodes().run()">
          clear nodes
        </button> -->
        <button @click="editor.chain().focus().setParagraph().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('paragraph') }">
          <i class="bi bi-paragraph"></i>
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('heading', { level: 1 }) }">
          <i class="bi bi-type-h1"></i>
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('heading', { level: 2 }) }">
          <i class="bi bi-type-h2"></i>
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('heading', { level: 3 }) }">
          <i class="bi bi-type-h3"></i>
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('bulletList') }">
          <i class="bi bi-list-ul"></i>
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('orderedList') }">
          <i class="bi bi-list-ol"></i>
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()" class="btn btn-outline-secondary" :class="{ 'is-active active': editor.isActive('blockquote') }">
          <i class="bi bi-blockquote-left"></i>
        </button>
        <button class="btn btn-outline-secondary" @click="editor.chain().focus().undo().run()">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
        <button class="btn btn-outline-secondary" @click="editor.chain().focus().redo().run()">
          <i class="bi bi-arrow-clockwise"></i>
        </button>
        </div>

      </div>
      <editor-content class="rounded shadow py-2 px-3" 
          :editor="editor"/>
    </div>
</div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Placeholder from '@tiptap/extension-placeholder'

export default {
    props: {
      placeholder : String,
      label       : String,
      wyswygValue: {
        type: String,
        default: '',
      },
    },
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: this.wyswygValue,
      extensions: [
        StarterKit,
      ],
      onUpdate: () => {
        this.$emit('update:wyswygValue', this.editor.getHTML())
      },
    })
  },


  watch: {
    wyswygValue(value) 
    {
      const isSame = this.editor.getHTML() === value

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.wyswygValue, false)
    },
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
/* Placeholder (at the top) */
  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }

  /* Placeholder (on every new line) */
  /*.ProseMirror p.is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }*/
.ProseMirror {
  min-height: 20vh;
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>
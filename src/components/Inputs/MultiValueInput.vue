<template>
  <div class="mb-3">
    <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <Multiselect
          v-model="value"
          :options="options"
          mode="tags"
          searchable=true
          :placeholder=placeholder
    />
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'

  export default {
    props:{
        placeholder : String,
        label       : String,
    },
    components: {
      Multiselect,
    },
    data() {
      return {
        value: null,
        options: [
          'Batman',
          'Robin',
          'Joker',
          'Andrew',
          'Bosco',
        ]
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>


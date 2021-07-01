<template>
  <div class="mb-3">
    <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <Multiselect
          v-model="value"
          :options="options"
          mode="tags"
          :searchable="searchable"
          :placeholder="placeholder"
    />
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'

  export default {
    props:{
        placeholder : String,
        label       : String,
        searchable  : Boolean,
        options     : Array,
    },
    components: {
      Multiselect,
    },
    data() {
      return {
        value: null,
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>


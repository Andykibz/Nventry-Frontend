<!--
    Works for the following types
        Text
        Email
-->
<template>
  <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <Multiselect
          v-model="value"
          :options="options"
          mode="single"
          searchable=true
          :placeholder=placeholder
        />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        options     : Array,

    },
    components: {
        Multiselect,
    },
    data() {
        return {
            value: null,

        }
    },
    setup() {
        
    },
})
</script>


<style src="@vueform/multiselect/themes/default.css"></style>
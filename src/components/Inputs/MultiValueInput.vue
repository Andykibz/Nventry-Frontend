<template>
  <div class="mb-3">
    <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <Multiselect
          v-model="values"
          :searchable="searchable" :placeholder="placeholder"
          :createTag="true"
          :options="options" mode="tags"
          @select="$emit('updateFunc', values)"
          @deselect="$emit('updateFunc', values)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue';
  import Multiselect from '@vueform/multiselect';

  export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        searchable  : Boolean,
        options     : Array,
        MultiValue  : Array,
        create      : Boolean,
    },
    components: {
      Multiselect,
    },
    data() {
      return {
        
      }
    },
    setup(){
      const values = ref([])

    
      return { values }
    }
  });
</script>

<style src="@vueform/multiselect/themes/default.css"></style>


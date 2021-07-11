<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input :value="TextValue" 
            @input="(event)=>$emit('update:TextValue', event.target.value)"
            type="type" class="form-control" :id="label+'-id'" 
            :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        type        : String,
        FieldName   : String,
        TextValue   : String,
    },
    setup() {
        
    },
    mounted(){
        
    }
})
</script>

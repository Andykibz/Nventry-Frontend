<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input :value="TextValue" 
            @input="(event)=>$emit('update:EmailValue', event.target.value)"
            type="type" class="form-control border-bottom" :id="label+'-id'" 

            :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        FieldName   : String,
        EmailValue   : String,
    },
    setup() {
        const validateEmail = (value: string) => {
            
        }
        return { validateEmail }
    },
    mounted(){
        
    }
})
</script>

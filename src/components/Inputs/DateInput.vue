<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input :value="DateValue" 
            type="date" class="form-control"
            @input="(event)=>$emit('update:DateValue', event.target.value)"
            :id="label+'-id'" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        DateValue   : String,
    },
    data(){
        return{

        }
    },
    setup() {
        
    },
    mounted(){

    }
})
</script>

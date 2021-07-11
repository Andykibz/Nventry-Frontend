<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input :value="NumberValue"
            @input="(event)=>$emit('update:NumberValue', event.target.value)"
            type="number" class="form-control" 
            :id="label+'-id'" :max="max" :step="step" 
            :placeholder="placeholder"/>
    </div>
</template>
<script lang="ts">
import { defineComponent ,ref } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        max         : { type: Number, default:99 },
        min         : { type: Number, default:0 },
        step        : Number,
        NumberValue : String,
        
    },
    setup() {
 
    },
    methods:{
  
    },
    mounted(){

    }
})
</script>

<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input 
            type="number" class="form-control" 
            :id="label+'-id'" :max="max" :step="step" 
            :placeholder="placeholder"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        max         : Number,
        min         : Number,
        step        : Number,
    },
    setup() {
        
    },
})
</script>

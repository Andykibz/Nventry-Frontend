<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ label }}</label>
        <input v-model="curDate" type="date" class="form-control" :id="label+'-id'" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
        type        : String,
    },
    data(){
        return{
            curDate     : new Date().toISOString().slice(0,10)
        }
    },
    setup() {
        
    },
})
</script>

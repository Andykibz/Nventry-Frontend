<template>
    <div class="mb-3">
        <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ placeholder }}</label>
        <div class="input-group ">
            <input type="file" class="form-control" :id="label+'-id'">
            <label class="input-group-text" :for="label+'-id'">{{ label }}</label>
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        placeholder : String,
        label       : String,
    },
    setup() {
        
    },
})
</script>

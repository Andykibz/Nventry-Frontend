<template>
<div class="mb-3">
    <label :for="label+'-id'" class="lead form-label d-flex flex-start">{{ placeholder }}</label>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label :for="label+'-id'">{{ label }}</label>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name    : "TextArea",
    props   : {
        label       : String,
        placeholder : String,

    },
    setup() {
        
    },
})
</script>

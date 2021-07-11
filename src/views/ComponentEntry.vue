<!--
  This component holds the info of individual components under a 
    given component model.If there there are a number of PLCs with 
    the same model, say, this component will give identity of each of
    those 10 components.    
  - The Label would refer to the decoded QR code
  - The View should accomodate addition of deletion and edit of 
    the individual component of the same model during its edit mode.
-->
<template>
    <div class="container">
        <div class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>Component</h3>
            <hr>
            <TextInput v-model:TextValue="Component.label" placeholder="Label eg. s7-1214C DC/DC/DC 1" label="Label" type="text"/>
            <TextInput v-model:TextValue="Component.identifier" placeholder="Component ID" label="Identifier" type="text"/>
            <SelectInput v-model:SelectValue="Component.condition" placeholder="Condition eg Good" label="Condition" :options="['Good', 'Bad', 'Under Maintenance']"/>
            <DateInput v-model:DateValue="Component.date" label="Date Acquired"/>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Submit</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import SelectInput from '@/components/Inputs/SelectInput.vue';
import DateInput from '@/components/Inputs/DateInput.vue';

export default defineComponent({
    name: 'Component Entry',
    components: {
        TextInput, NumberInput, SelectInput, DateInput
    },
    setup(){
        enum conditionOptions { "Bad", "Good" };
        const Component = ref({
            label       : null,
            identifier  : null,
            condition   : null,
            date        : new Date().toISOString().slice(0,10),
        });
        return{ Component }
    },
});
</script>

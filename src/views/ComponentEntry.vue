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
            <TextInput placeholder="Label eg. s7-1214C DC/DC/DC 1" label="Label" type="text"/>
            <TextInput placeholder="Component ID" label="Identifier" type="text"/>
            <SelectInput placeholder="Condition eg Good" label="Condition" :options="['Good', 'Bad', 'Under Maintenance']"/>
            <SelectInput placeholder="Availability" label="Condition" :options="['In-Stock', 'Unaccounted', 'In-Use']"/>
            <DateInput label="Date Acquired"/>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Submit</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import SelectInput from '@/components/Inputs/SelectInput.vue';
import DateInput from '@/components/Inputs/DateInput.vue';

export default defineComponent({
  name: 'Person Entry',
  components: {
    TextInput, NumberInput, SelectInput,DateInput
  },
});
</script>

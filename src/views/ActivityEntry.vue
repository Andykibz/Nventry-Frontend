<!--
## Activity
An activity can be a project or exercise. A project will be anything 
that is carried out to achieve a certain goal for a specified period 
of time. An excercise is similar to projects but are more short term.

- Name`<String>` :
- Type
- Persons`<One-to-Many>`
- Components`<One-to-Many>`
- Description
- Start Date`<Date>`
- End Date`<Date>`
-->
<template>
    <div class="container ">
        <div id="wrapper" class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>Activity Entry</h3>
            <hr>
            <TextInput placeholder="Title of Activity" label="Title" type="text"/>
            <SelectInput placeholder="Type of Activity eg. Project" label="Type" :searchable="false" :options="['Exercise', 'Project']"/>
            <MultiValueInput label="Participants" placeholder="Activity Participants" :searchable="true"/>
            <WyswygInput placeholder="Details of the Activity" label="Description"/>
            <div class="row">
                <div class="col-md-6">
                    <DateInput label="Start Date"/>
                </div>
                <div class="col-md-6">
                    <DateInput label="End Date"/>
                </div>
            </div>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Register</a>
            </div>
        </div>

    </div>
    

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import SelectInput from '@/components/Inputs/SelectInput.vue';
import WyswygInput from '@/components/Inputs/WyswygInput.vue';
import MultiValueInput from '@/components/Inputs/MultiValueInput.vue';
import DateInput from '@/components/Inputs/DateInput.vue';

export default defineComponent({
    components: {
        TextInput, NumberInput, SelectInput, WyswygInput,MultiValueInput, DateInput
    },
    setup() {
        
    },
})
</script>

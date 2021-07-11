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
            <TextInput placeholder="Title of Activity" label="Activity Title" type="text" v-model:TextValue="ActivityEntry.ActTitleValue"/>  
            
            <SelectInput v-model:SelectValue="ActivityEntry.ActTypeValue" :options="actTypeOptions" label="Activity Type" placeholder="Type of Activity"/>
            
            <div class="mb-3">
              <label for="Participants-id" class="lead form-label d-flex flex-start">Participants</label>
              <Multiselect
                    v-model="ActivityEntry.participants"
                    :searchable="true" placeholder="Add Participants"
                    :createTag="true"
                    :options="participantOptions" mode="tags"/>
            </div>

            <WyswygInput v-model:wyswygValue="ActivityEntry.ActDescription" placeholder="Details of the Activity" label="Description"/>
            
            <div class="row">
                <div class="col-md-6">
                    <DateInput label="Start Date" v-model:DateValue="ActivityEntry.startDateValue"/>
                </div>
                <div class="col-md-6">
                    <DateInput label="End Date" v-model:DateValue="ActivityEntry.endDateValue"/>
                </div>
            </div>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a @click.prevent="submitAct" role="button" href="#Submit" type="button" class="btn btn-outline-primary btn-block">Register</a>
            </div>
        </div>

    </div>
    

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import WyswygInput from '@/components/Inputs/WyswygInput.vue';
import Multiselect from '@vueform/multiselect';
import TextInput from '@/components/Inputs/TextInput.vue'
import MultiValueInput from '@/components/Inputs/MultiValueInput.vue'
import SelectInput from '@/components/Inputs/SelectInput.vue'
import DateInput from '@/components/Inputs/DateInput.vue'

export default defineComponent({
    components: {
        WyswygInput, Multiselect,TextInput, MultiValueInput, SelectInput, DateInput
    },
    setup() {
        const ActivityEntry = ref({
            ActTitleValue   : null,
            startDateValue  : new Date().toISOString().slice(0,10),
            endDateValue    : new Date().toISOString().slice(0,10),
            participants    : new Array(),
            ActTypeValue    : null,
            ActDescription  : null
        });

        const submitAct = () => {
            console.log(ActivityEntry);            
        }

        const actTypeOptions = ref([ "Exercise", "Project" ])
        // const participantOptions  = ref(new Array())
        const participantOptions = [
                { value: 'batman', label: 'Batman' },
                { value: 'robin', label: 'Robin' },
                { value: 'joker', label: 'Joker' },
            ];
        
        const pushFunc = ( values : Array<string> ) => {
            ActivityEntry.value.participants = values;
        }

        return{
            ActivityEntry,
            actTypeOptions,
            participantOptions,
            submitAct,
            pushFunc,
        }

    },
    data(){
        return{
            
        }
    },
    methods:{
        
    }
})
</script>

<!--
  The component should be mounted:
      1. When the model entry is clicked from the List of component types/models by a borrower
      2. 

  **Component ID** 
    - will get filled once the component is scanned
  **Borrower field** 
    - the field holds the name of a registered user
    - should be filled automatically when a user clicks on the model they want to borrow
    - if an admin does it for the borrower, there should be a a select input
  **Component Type** will be filled by the Borrower before-hand
    --An Admin user should also be able to enter the user in question
  The date should be filled automatically once the DateInput component is mounted
  -------CONCERNS----------
  1. When is the condition displayed and when is it editable
  2.  When is the
-->
<template>
    <div class="container">
        <div class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>Borrow Component</h3>
            <hr>
            <TextInput placeholder="Component ID" label="Component Identifier" type="text"/>
            <SelectInput placeholder="Borrower's Name eg. Jane Doe" label="Borrower's Name" :options="[]" :searchable="true"/>
            <SelectInput placeholder="Component Type eg. S7-1214C DC/DC/DC" label="Component Type" :options="['HMI Basi KTP700', 'S7-1214C DC/DC/DC']" :searchable="true"/>
            <DateInput label="Borrow Date"/>
            <SelectInput placeholder="Activity eg Project" label="Activity" :searchable="false" :options="['Exercise', 'Project']"/>
            <MultiValueInput v-model="componentList" :searchable="true" label="Components" :options="['HMI Basi KTP700', 'S7-1214C DC/DC/DC']"/>

            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Save <i class="bi bi-save"></i> </a>
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
import MultiValueInput from '@/components/Inputs/MultiValueInput.vue';

export default defineComponent({
  name: 'Component Model Entry',
  computed:{

  },
  components: {
    TextInput, NumberInput, SelectInput, DateInput, MultiValueInput
  },
  data(){
      return{
         componentList : ["PLC","Screw Set"],
      }
  },
  mounted(){
    // console.log(this.$refs.components);
    
    // this.$refs.components.open();
  },

  setup() {
    
  },
});
</script>


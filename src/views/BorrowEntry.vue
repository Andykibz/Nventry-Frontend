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
            <h3>Borrow Components</h3>
            <hr>
            <TextInput v-model:TextValue="Borrow.borrower" 
                    placeholder="Borrower's Name" label="Borrower" type="text"/>
            <!-- <SelectInput placeholder="Borrower's Name eg. Jane Doe" label="Borrower's Name" :options="[]" :searchable="true"/> -->
            <!-- <SelectInput placeholder="Component Type eg. S7-1214C DC/DC/DC" label="Component Type" :options="['HMI Basi KTP700', 'S7-1214C DC/DC/DC']" :searchable="true"/> -->
            <DateInput label="Borrow Date" v-model:DateValue="Borrow.date"/>
            <SelectInput placeholder="Activity eg Project" label="Activity" 
                  :searchable="false" :options="['Exercise', 'Project']"/>
            <div class="mb-3">
              <label for="Activity-id" class="lead form-label d-flex flex-start">Components</label>
              <Multiselect
                    v-model="Borrow.componentNames"
                    :searchable="true" placeholder="Search for Components"
                    :createTag="true"
                    @select="instantiateComponent(Borrow.componentNames)"
                    @deselect="instantiateComponent(Borrow.componentNames)"
                    :options="componentModelOptions" 
                    mode="tags"/>
            </div>
            <hr>
            <div class="componentsWrapper row" v-if="Borrow.componentNames">
              <BorrowComponentEntryVue                   
                  :key="index" v-for="(component, index) in Borrow.components"
                  v-model:componentName="component.name"
                  v-model:componentIDs="component.ids"
                  v-model:componentCount="component.quantity"
                  
                  class="col-md-6 col-sm-12"/>
            </div>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Save <i class="bi bi-save"></i> </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import SelectInput from '@/components/Inputs/SelectInput.vue';
import DateInput from '@/components/Inputs/DateInput.vue';
import MultiValueInput from '@/components/Inputs/MultiValueInput.vue';
import BorrowComponentEntryVue from './BorrowComponentEntry.vue';

export default defineComponent({
  name: 'Borrow Entry',
  computed:{

  },
  components: {
    TextInput, NumberInput, 
    SelectInput, DateInput, 
    MultiValueInput, Multiselect,
    BorrowComponentEntryVue
  },
  setup(){
      type ActivityType = "Project" | "Exercise";
      interface iComponent{
          name      : string,
          quantity  : number,
          ids       : Array<string>,
      }
      interface iBorrow  {
          borrower        : string | undefined,
          date            : string,
          activity        : string | undefined,
          componentNames  : Array<string>,
          components      : Array<iComponent>
      } 
      interface icomponentModelOptions{
          value : string,
          label : string,
      }

      const componentModelOptions = [
          { value: '0001', label  : "PLC S7-1214C DC/DC/DC" },
          { value: '0002', label  : "PLC S7-1512 C PN" },
          { value: '0003', label  : "IOT2040" },
          { value: '0004', label  : "BacNet" },
          { value: '0005', label  : "Sinamic G120" },
      ];

      const Borrow = ref<iBorrow>({
          borrower        : undefined,
          date            : new Date().toISOString().slice(0,10),
          activity        : undefined,
          componentNames  : ['0004'],
          components      : Array<iComponent>()
      });

      const getComponentLabel = (value:string)  => {
          return componentModelOptions.filter( (comp)=> comp.value == value )[0].label
         
         
      }

      const componetName = computed((value:string) => {
          for (const obj of componentModelOptions) {
              if(obj.value == value){
                  return obj.label
              }
          }
      });

      
      /**
       * WILL CHANGE IF THE OPTIONS ARE NO LONGER ARRAY OF OBJECTS. 
       */
      const instantiateComponent = ( componentList: Array<string> ) => {
          const _compArr = new Array<iComponent>()
          componentList.forEach( (labelVal)=>{
              _compArr.push({
                  name          : getComponentLabel( labelVal ),
                  quantity      : 1,
                  ids           : Array<string>()
              })
          });
          Borrow.value.components = _compArr;          
      }

      return{
          componentModelOptions,
          Borrow,
          instantiateComponent,
          getComponentLabel,
      }
  },
  mounted(){
      /** COME BACK TO THIS AFTER DB IS IMPLEMENTED */
      this.instantiateComponent(this.Borrow.componentNames)
  }

});
</script>


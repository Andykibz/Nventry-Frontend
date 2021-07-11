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
    <div class="gy-2 gx-3 mb-3 ">
        <!-- <TextInput class="col-auto disabled" placeholder="Component Model Name"/> -->
        <div class="col component-label mt-2 d-flex justify-content-between">
          <span class="h5 mb-0"> {{ componentName }} </span> 
          <button v-if="componentCount>0" class="btn btn-sm btn-outline-secondary">
            <i class="bi bi-upc-scan"></i>
          </button>
        </div>
        <hr class="my-2"/>
        <div class="IDsWrapper" ref="IDsWrapper">
            <div class="input-group mb-3" :key="n" v-for="(n) in componentIDs">
                <input :value="componentID[n]" type="text" class="form-control" placeholder="Component ID" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"> <i class="bi bi-upc-scan"></i>
                </button>
            </div>          
        </div>
        <div class="mb-3" >
            <input :value="componentCount"
                @input="(event)=>$emit('update:componentCount', +event.target.value)"
                type="number" class="form-control" 
                placeholder="How many.."/>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Borrow Component Entry',
  computed:{

  },
  components: {
    
  },
  props:{
      componentName  : {
        type    : String,
        default : "Model Name"
      },
      componentIDs : {
        type    : Array,
      },
      componentCount : {
        type    : Number,
        default : 1
      },
  },
  data(){
      return{
          filled  : 0,
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


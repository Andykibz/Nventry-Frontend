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
          <button v-if="componentCount>componentIDs.length && showQrButton"
              @click="showReader=true"
              class="btn btn-sm btn-outline-secondary">
                  <i class="bi bi-upc-scan"></i>
          </button>
        </div>
        <hr class="my-2"/>
        <div class="d-grid mb-3 mx-3">
            <button @click="$emit('update:componentCount', ( componentCount < 5 ) ? componentCount+1 : componentCount )" role="button" class="btn btn-sm btn-block btn-outline-dark"> <i class="bi bi-plus-lg"></i> </button>
            <span class="component-quantity " style="font-size:x-large"> {{ componentCount }} </span>
            <button @click="$emit('update:componentCount', ( componentCount > 1 ) ? componentCount-1 : componentCount )" role="button" class="btn btn-sm btn-outline-dark"> <i class="bi bi-dash-lg"></i> </button>
        </div>
        <div class="IDsWrapper" ref="IDsWrapper">
            <div class="border-bottom py-2 d-flex justify-content-between" :key="index" v-for="(compID, index) in componentIDs">
                {{compID}}
                <button role="button" @click="removeIndexedID(index)">
                    <i class="bi bi-trash text-danger"></i>
                </button>
            </div>          
        </div>

        <div>
            <qrcode-stream v-if="showReader" @decode="OnDecode" @init="onInit"></qrcode-stream>
        </div>

</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue3-qrcode-reader'

export default defineComponent({
  name: 'Borrow Component Entry',
  computed:{

  },
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
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
          filled        : 0,
          decodedText   : "",
          error         : "",
          showReader    : false,
          showQrButton  : true,
      }
  },
  emits:{

  },
  mounted(){
    // console.log(this.$refs.components);
    
    // this.$refs.components.open();
  },
  // $emit('update:componentIDs', this.decodedText) => {},

  setup() {
     
  },
  methods:{
      OnDecode(_decoded : string) {
        if( _decoded.length > 5  ){
            this.decodedText = _decoded;
            this.showReader = false;
            // this.$emit('update:componentIDs', this.componentIDs?.push( this.decodedText ) )
            this.componentIDs?.push( this.decodedText )
        }          
      },

      async onInit (promise: unknown) {
          try {
              await promise
          } catch (error) {
            if (error.name === 'NotAllowedError') {
                this.error = "ERROR: you need to grant camera access permisson"
              } else if (error.name === 'NotFoundError') {
                this.error = "ERROR: no camera on this device"
              } else if (error.name === 'NotSupportedError') {
                this.error = "ERROR: secure context required (HTTPS, localhost)"
              } else if (error.name === 'NotReadableError') {
                this.error = "ERROR: is the camera already in use?"
              } else if (error.name === 'OverconstrainedError') {
                this.error = "ERROR: installed cameras are not suitable"
              } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "ERROR: Stream API is not supported in this browser"
              }
          }
      },

      removeIndexedID(index : number){
          this.componentIDs?.splice(index,1)
          this.$emit('update:componentCount', this.componentCount-1 )          
      }
  }
});
</script>


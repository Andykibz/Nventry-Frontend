<!--
## COMPONENT MODEL
    This view allows entry pertauning to a component model
    The view is available when trying to add new modes or trying to 
    update information of a certain model.
    Information that will be update-able will include: 
        - Description
        - Total Number
        - Datasheet Link
    Furthermore, there will be a provision to add a new component member 
    and show a list of all component members.

-->
<template>
    <div class="container ">
        <div id="wrapper" class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>Component Model Entry</h3>
            <hr>
            <TextInput  placeholder="Name eg PLC s7-1214C DC/DC/DC" label="Component Name" v-model:TextValue="ComponentDetails.CmptName"/>
            <TextInput  placeholder="Datasheet Link" label="Datasheet" type="text" v-model:TextValue="ComponentDetails.Datasheet"/>
            <FileInput  placeholder="Upload Preview Image" label="Upload" v-model:TextValue="ComponentDetails.ImageName"/>
            <WyswygInput v-model:wyswygValue="ComponentDetails.Description" placeholder="Enter Description Here" label="Description"/>
            <NumberInput placeholder="Total in Number" label="Total No." v-model:NumberValue="ComponentDetails.TotInNum"/>
            <NumberInput placeholder="Count in Stock" label="In Stock" v-model:NumberValue="ComponentDetails.CntInStk"/>
            <div class="row mb-3">                
                <div class="col-sm-6 col-12">
                    <label for="new component" class="lead form-label d-flex flex-start"> New Component(s) </label>
                    <div class="input-group mb-3">
                        <input type="number"  class="form-control" placeholder="Add New Component" aria-label="Add New Component">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>
                <div class="col-sm-6 col-12 d-flex align-items-end justify-content-end">
                    <div class="mb-3">
                        <a href="#" class="btn btn-success" role="button"> List Components </a>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a @click="persist" href="#Submit" type="button" class="btn btn-outline-primary btn-block">Submit</a>
            </div>
        </div>
    </div>
    

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import FileInput from '@/components/Inputs/FileInput.vue';
import WyswygInput from '@/components/Inputs/WyswygInput.vue';


export default defineComponent({
    components: {
        TextInput, NumberInput, FileInput, WyswygInput
    },
    setup() {
        
        const ComponentDetails = ref( {
            CmptName    : null,
            TotInNum    : null,
            CntInStk    : null,
            Datasheet   : null,
            Description : null,
            ImageName   : null,
        });

       
        return { ComponentDetails }
    },

    
    
})
</script>

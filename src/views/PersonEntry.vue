<template>
    <div class="container">
        <div class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>User Registration</h3>
            <hr>
            <TextInput v-model:TextValue="person.full_name" placeholder="Full Name eg. Jane Doe" label="Full Name" type="text"/>
            <TextInput v-model:TextValue="person.pub_id" placeholder="Nat. ID/Passport No." label="Public Reg. ID" type="text"/>
            <TextInput v-model:TextValue="person.local_id" placeholder="Reg./PF No. eg E022-01-0833/2015" label="Local ID" type="text"/>
            <EmailInput v-model:EmailValue="person.email" placeholder="Email. eg janedoe@mail.com" label="Email Address"/>
            <NumberInput v-model:NumberValue="person.phone_num" placeholder="Phone Number eg. +254712345678" label="Phone No."/>
            <SelectInput v-model:SelectValue="person.designation" placeholder="Select Designation: Staff or Student" label="Designation" :options="['Staff', 'Student']"/>
            <SelectInput v-model:SelectValue="person.department" placeholder="Select Department" label="Department" :options="['Mechatronics', 'Siemens', 'Mechanical', 'Electrical', 'Computer Science','Other']"/>
            <div class="d-grid gap-2 col-8 mx-auto mb-3">
                <a href="#Submit" type="button" class="btn btn-outline-primary btn-block">Register</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/Inputs/TextInput.vue'; // @ is an alias to /src
import NumberInput from '@/components/Inputs/NumberInput.vue';
import SelectInput from '@/components/Inputs/SelectInput.vue';
import EmailInput from '@/components/Inputs/EmailInput.vue';

export default defineComponent({
    name: 'Person Entry',
    components: {
        TextInput, NumberInput, SelectInput, EmailInput
    },
    data(){
      return{
          person: {
              full_name   : null,
              pub_id      : null,
              local_id    : null,
              email       : null,
              phone_num   : null,
              designation : null,
              department  : null  
          }
      }
    },
});
</script>

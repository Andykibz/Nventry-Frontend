<template>
    <div class="container">
        <div class="col-xs-12 col-sm-11 col-md-9 col-lg-7 mx-auto">
            <h3>User Registration</h3>
            <hr>
            <TextInput placeholder="Full Name eg. Jane Doe" label="Full Name" type="text"/>
            <TextInput placeholder="Nat. ID/Passport No." label="Public Reg. ID" type="text"/>
            <TextInput placeholder="Reg./PF No. eg E022-01-0833/2015" label="Local ID" type="text"/>
            <TextInput placeholder="Email. eg janedoe@mail.com" label="Email Address" type="email"/>
            <NumberInput placeholder="Phone Number eg. +254712345678" label="Phone No."/>
            <SelectInput placeholder="Select Designation: Staff or Student" label="Designation" :options="['Staff', 'Student']"/>
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

export default defineComponent({
  name: 'Person Entry',
  components: {
    TextInput, NumberInput, SelectInput
  },
});
</script>

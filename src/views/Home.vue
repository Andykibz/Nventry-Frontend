<template>
  <div class="container">
  <div class=" mb-3">
      <h1>Nventry</h1>
      <p>Borrow and Return Components at your own convenience</p>
  </div>
    <div class="col-lg-6 col-md-10 col-sm-12 mx-auto" >
      <div class="row mb-3">
          <div class="col-md-6 col-sm-12 mb-3">
            <router-link :to="{ name: 'ComponentList' }" class="cardLink shadow px-3 py-4 border-top border-info hvr-float "
                  role="button" style="border-width: 4px !important;">
              <h2 class="text-secondary">Components</h2>
              <hr class="col-1 p-0 m-2 mx-auto rounded bg-secondary" style="opacity:1; height:5px"/>
              <p class="">Browse through components in the inventory</p>
              <i style="font-size:xxx-large" class="pull-right text-info bi bi-tools"></i>
            </router-link>
          </div>
          <div class="col-md-6 col-xs-12 mb-3">
            <router-link :to="{ name: 'BorrowEntry' }" class="cardLink shadow px-3 py-4 border-top border-info hvr-float"
                  role="button" style="border-width: 4px !important;">
              <h2 class="text-secondary">Borrow</h2>
              <hr class="col-1 p-0 m-2 mx-auto rounded bg-secondary" style="opacity:1; height:5px"/>
              <p class="">Select components you need then create a Borrow Request</p>
              <i style="font-size:xxx-large" class="pull-right text-info bi bi-basket3"></i>
            </router-link>
          </div>
      </div>
      <hr class="divider">
      <div class="row mb-3">
          <div class="col-md-6 col-xs-12 mb-3">
            <router-link :to="{ name: 'ActivityEntry' }" class="cardLink shadow px-3 py-4 border-top border-info hvr-float "
                  role="button" style="border-width: 4px !important;">
              <h2 class="text-secondary">Activities</h2>
              <hr class="col-1 p-0 m-2 mx-auto rounded bg-secondary" style="opacity:1; height:5px"/>
              <p class="">Add and Update Activities involving components</p>
              <i style="font-size:xxx-large" class="pull-right text-info bi bi-calendar-event"></i>
            </router-link>
          </div>
          <div class="col-md-6 col-xs-12 mb-3">
            <router-link :to="{ name: 'ComponentModelEntry' }" class="cardLink shadow px-3 py-4 border-top border-info hvr-float"
                  role="button" style="border-width: 4px !important;">
              <h2 class="text-secondary">Add Component</h2>
              <hr class="col-1 p-0 m-2 mx-auto rounded bg-secondary" style="opacity:1; height:5px"/>
              <p class="">Add and Update Component Models from your Department</p>
              <i style="font-size:xxx-large" class="pull-right text-info bi bi-pencil"></i>
            </router-link>
          </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup(){
      
  }
});
</script>
<style lang="scss">
.cardLink{
    border-width: 4px !important;
    border-radius: 5px ;
    text-decoration: none;
    cursor: pointer;
    width: 100%;

    p{
        color: #222;   
    }
    hr.divider {
    	height: 10px;
      border: 0;
      box-shadow: 0 10px 10px -10px #8c8b8b inset;
    }
}

</style>
<style>

</style>
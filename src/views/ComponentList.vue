<template>
<div class="container">
    <div class=" mb-3">
        <h1>Components</h1>
        <p>Borrow and Return Components at your own convenience</p>
    </div>
    <div class="col-lg-8 col-md-10 col-sm-12 mx-auto" >
      <div class="row mb-3">
          <div :key="index" v-for="(component,index) in components"
            class="mb-3 col-md-4 col-sm-6 card-wrapper">
                <div class="card">
                    <h5 class="card-header" v-text="component.name"></h5>
                    <img :src="component.image" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                            In-Stock : <span> {{ component.quantity }} </span>
                    </div>
                    <hr class="my-1">
                    <span class="mb-1">
                        <a href="#" role="button" class="mx-2 btn btn-sm btn-primary"> 
                            <i class="bi bi-eye"></i>
                        </a>
                        <a href="#" @click.prevent="updateBasket(component.name)" role="button" class="mx-2 btn btn-sm btn-success">
                            <i class="bi bi-bag-plus"></i>
                        </a>
                    </span>
                </div>
          </div>
      </div>
    </div>
  </div>    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { iBorrow, iComponent } from "@/typings/custom_types"

export default defineComponent({
    name    : "Component List",
    computed:{
        ...mapGetters({
            // components :  'getAllComponents'
        })
    },
    setup() {
        const store = useStore();
        store.dispatch('getAllComponents');
        const updateBasket = (_component : string) => {
            const _user = store.getters.getUserName;
            const _components:iComponent ={ name : _component, quantity: 1, ids : new Array<string>() }  
    
            const _Borrow : iBorrow = {
                borrower        : _user,
                date            : new Date().toISOString().slice(0,10),
                activity        : undefined,
                componentNames  : [ _component ],
                components      : [_components],
            }
            store.commit('ADD_COMPONENT_TO_BUCKET', _Borrow)
        }
        const components = store.getters.getComponents( 0, 4 )
        return{ store, components, updateBasket }
    },
    
    
    
})
</script>

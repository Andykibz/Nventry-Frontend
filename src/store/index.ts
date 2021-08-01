import { registerRuntimeCompiler } from '@vue/runtime-core'
import { createStore } from 'vuex'
import { iBorrow, iComponentModelListable } from "@/typings/custom_types"
import { LoremIpsum } from "lorem-ipsum";


const Store = createStore({
    
    state: {
        
        user: {
            name    : "Andrew Kibor"
        },
        componentsList  : new Array<iComponentModelListable>(),
        componentBucket : {} as iBorrow, 
        
    },

    getters: {
        getComponents : (state) => ( _start :number, _end : number) => {
            return state.componentsList.slice(_start, _end);
        },
        getAllComponents : (state) => {
            return state.componentsList;
        },
        getUserName: (state) => {
            return state.user.name
        }
    },

    mutations: {
        SET_COMPONENT_BUCKET (state) {
            state.user.name = "John Klooney"
        },

        SET_COMPONENT_LIST (state, _cList) {
            state.componentsList = _cList
        },
        ADD_COMPONENT_TO_BUCKET(state, _borrow:iBorrow) {
            if (state.componentBucket.borrower == null) {
                state.componentBucket = _borrow
            } else if (state.componentBucket.componentNames.includes(_borrow.componentNames[0] )) {
                
                let index = state.componentBucket.componentNames.indexOf(_borrow.componentNames[0])
                state.componentBucket.components[index].quantity += 1
            } else {
                state.componentBucket.componentNames.push(_borrow.componentNames[0])
                state.componentBucket.components.push( _borrow.components[0] )
            }
        },
    },
    
    actions: {
        
        getAllComponents ({ commit }) {
            const _componentList = new Array<iComponentModelListable>()
            let lorem = new LoremIpsum();
            for (let index = 0; index < 15; index++) {
                let _label = lorem.generateWords(1);
                _componentList.push({
                    name    : _label,
                    image   : `https://dummyimage.com/600x400/000/fff&text=${_label}`,
                    quantity : Math.round( Math.random() * 10)
                })                    
            }
            _componentList;
            commit('SET_COMPONENT_LIST', _componentList)
        }
    }
})



export default Store;
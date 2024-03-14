import { signalStore, withMethods, withState, withComputed, patchState } from "@ngrx/signals"
import { computed } from "@angular/core"
// Using singals we can create the whole store, compared to ngrx where we need to create the action, reducer, selector

//Interface to export

export interface CounterState {
    count: number
}

//Initialize the count state
const initalCounteState: CounterState = {
    count: 0
}

//Creating Signal Store

export const CounterStore = signalStore(

    withState(initalCounteState),
    withComputed(({count})=>({
        doubleCount: computed(()=> count() * 2)
    })),
    withMethods(({count, ...store})=> ({
        increment(){
            patchState(store, {count: count() + 1})
        },
        decrement(){
            patchState(store, {count: count() - 1})
        },
        reset(){
            patchState(store, {count : 0})
        }
        
    }))
)





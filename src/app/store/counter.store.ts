import { signalStore, withMethods, withState, patchState } from "@ngrx/signals"
import { increment } from "../NGRX-actions/counter.action"
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
export const counterStore = signalStore(

    withState(initalCounteState),
    withMethods(({count, ...store})=> ({
        increment(){
            patchState(store, {count: count() + 1})
        },
        decrement(){
            patchState(store, {count: count() - 1})
        },
        reset(){
            patchState(store, {count: count() -1 })
        }
    }))
)





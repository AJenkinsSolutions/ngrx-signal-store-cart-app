import { createAction, props } from "@ngrx/store";

import { IProduct } from "../models/product.interface";



//param1: Name of component the action belongs to.
//param2: Name of action
//param3: Name of props AKA property, props is also a method ()
export const addToCart = createAction('[Cart Component] AddToCart', props<{product: IProduct}>());


//Well use the id instead of the whole object for increment & decrement
export const incrementProductCount = createAction('[Cart Component] IncrementProductCount', props<{productId: number}>());

export const decrementProductCount = createAction('[Cart Component] DecrementProductCount', props<{productId: number}>());

export const removeItem = createAction('[Cart Component] RemoveItem', props<{productId: number}>())
import { IProduct } from "../models/product.interface";
import { signalStore, withMethods, withState, withComputed, patchState } from "@ngrx/signals"
export interface CartState {
    products: IProduct[];
    totalPrice: number;

}


export const initialCartState: CartState = {
    
    products: [],
    totalPrice: 0
    
} 


export const CartStore = signalStore(
//Lets inject the cart store anywehere in our application
{providedIn: 'root'},

    withState(initialCartState),
    withMethods(({products, ...store}) => ({
        addToCart(product: IProduct){
            const updatedProducts = [...products(), product]
            patchState(store, {products: updatedProducts})
        },
        removeItem(productId: number){
            const updatedProducts = products().filter((product) => product.id === productId)
            patchState(store, {products: updatedProducts})

        },
        incrementProductCount(productId: number){
            const updatedProducts = products().map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity + 1 }
            : product);
            patchState(store, {products: updatedProducts})
        },
        decrementProductCount(productId: number){
            const updatedProducts = products().map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity - 1 }
            : product);
            patchState(store, {products: updatedProducts})
        }
        



    })

    )



)
import { Component, inject } from '@angular/core';
import { AppState } from '../../NGRX-states/app.state';
import { Store } from '@ngrx/store';
import { selectTotalPrice, seletctCartProducts } from '../../NGRX-selectors/cart.selector';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { CommonModule, NgFor } from '@angular/common';
import { decrementProductCount, incrementProductCount, removeItem } from '../../NGRX-actions/cart.action';
import { CartStore } from '../../store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  //Now we can use this data in the cart HTML
  cartItems$: Observable<IProduct[]> = this.store.select(seletctCartProducts)
  totalPrice$ = this.store.select(selectTotalPrice);
  cartStore = inject(CartStore)

  constructor(private store: Store<AppState>){}


  remove(productId: number){
    console.log("info : Remove item dispacther")
    this.store.dispatch(removeItem({productId}));
  }

  incrementItemQuantity(productId : number){

    console.log("info : incrementItemQuantity dispacther" );
    this.store.dispatch(incrementProductCount({productId}))
  }

  decrementItemQuantity(productId : number){
    console.log("info : decrementItemQuantity dispacther in cart Component" );
    this.store.dispatch(decrementProductCount({productId}))

  }
  
 

}

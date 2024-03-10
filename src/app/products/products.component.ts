import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { IProduct } from '../models/product.interface';
import { ProductApiService } from '../shared/service/product-api.service';
import { AppState } from '../NGRX-states/app.state';
import { Store } from '@ngrx/store';
import { cartReducer } from '../NGRX-reducers/cart.reducer';
import { addToCart } from '../NGRX-actions/cart.action';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  
  // Add HttpClient Object
  //* We add the HttpClientModule in the providers Array in the app.config
  http = inject(HttpClient);
  productApiService = inject(ProductApiService)
  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';

  //define the return api call
  products$ = this.productApiService.getProducts() as Observable<IProduct[]>
  
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    //Logger.info
    //console.log(this.products$.forEach(obj => console.log(obj)))

    //EXAMPLE: of flat api call vs dynamiccly adding the quantity property

    //Flat api call without dynamiclly adding property

    // this.http.get(this.baseUrl + this.productsEndpoint)
    // .subscribe(res => {
    //   console.log(res)
    // })
  
    // this.productApiService.getProducts()
    // .subscribe((res=> {
    //   console.log(res)
    // }))
  }

  //Parent component Method which handles the data dispacthed from the child component 
  //
  addItemToCart(product : IProduct): void{
    console.info("in addItemToCart in  productComponent.ts")
    this.store.dispatch(addToCart({product}));

  }
 

}

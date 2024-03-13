import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  //Responsible for doing API call
  http = inject(HttpClient);
  baseUrl: string = 'https://fakestoreapi.com/';
  //baseUrl: string = 'https://localhost:3002/';
  productsEndpoint: string = 'products';

  constructor() { }

  //https://chat.openai.com/share/90ecc28b-4960-4dbd-9a4b-6dfe990ff154
  getProducts(){
    //A Dynamic way of adding a property to the api response 
    return this.http.get<IProduct[]>(this.baseUrl + this.productsEndpoint)
    .pipe(
      map((products) =>{
        return products.map((product) => {

          return {...product, quantity: 1}

        })
      })
    )
  }
}

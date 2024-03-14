import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Store, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './NGRX-reducers/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './NGRX-reducers/cart.reducer';
import { productReducer } from './NGRX-reducers/product.reducer';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './NGRX-effects/product.effect';
import { CounterStore } from './store/counter.store';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideClientHydration(), provideAnimations(),
    provideStore(), 
  //Param1: Name of state
  //Para2: Name of Reducer
    provideState({name: 'counter', reducer: counterReducer}),
    provideState({name: 'cart', reducer: cartReducer}),
    provideState({name: 'product', reducer: productReducer}),
    provideEffects(ProductEffect),
    provideHttpClient(withFetch()),
    provideStoreDevtools({maxAge: 25}),
    
  
  ]
};

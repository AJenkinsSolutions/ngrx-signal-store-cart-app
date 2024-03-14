import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../NGRX-states/app.state';
import { selectCount } from '../../../NGRX-selectors/counter.selector';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { IProduct } from '../../../models/product.interface';
import { seletctCartProducts } from '../../../NGRX-selectors/cart.selector';
import { CartStore } from '../../../store/cart.store';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly sidebarSignal = inject(SideBarSignal);
  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }

  //Count state variable
  count$: Observable<number>;

cartStore = inject(CartStore)
  products$: Observable<IProduct[]>;

  //Initalize our Global store
  constructor(private store: Store<AppState>, public router: Router){
    //Now we can initalize the count$ from the store
    this.count$ = this.store.select(selectCount);

    this.products$ = this.store.select(seletctCartProducts)
  }

  //Created a explict naviagation method becuases of issues with the routerLink
  navigateToCart() {
    this.router.navigate(['/cart']);
    console.log("Navigate to cart");
  }




}

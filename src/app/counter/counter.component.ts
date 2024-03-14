import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../NGRX-states/app.state';
import { selectCount } from '../NGRX-selectors/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../NGRX-actions/counter.action';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {


  count$: Observable<number>;

  count = signal(0);



  //Initalize our Global store
  constructor(private store: Store<AppState>){
    //Now we can initalize the count$ from the store
    this.count$ = this.store.select(selectCount);
  }
 

//These methods will dispatch our actions to the reducer
  increment(): void {
    //Param1 : Which action to dispatch
    this.store.dispatch(increment())
  }

  decrement(): void {
    this.store.dispatch(decrement())
  }

  reset(): void {
    this.store.dispatch(reset())
  }

}


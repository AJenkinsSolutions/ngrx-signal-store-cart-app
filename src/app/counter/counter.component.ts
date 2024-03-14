import { Component, computed, signal, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../NGRX-states/app.state';
import { selectCount } from '../NGRX-selectors/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../NGRX-actions/counter.action';
import { Signal } from '@angular/core';
import e from 'express';

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
  //Whenever the 'count' signal is computed * 2 
  double = computed(()=> this.count() * 2);



  
  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
    //Signals effects : as i understand it know is kindsa like logging
    //Every time the signal is triggered 
    effect(() => {

      console.log("This Current value of count is " + this.count());
    })

  }
 


  increment(): void {
    //  Signal method update takes a function
    this.count.update((num) => num + 1);
   
  }

  decrement(): void {
    this.count.update((num) => num -1);
  }

  reset(): void {
    // Signal method assigns value to signal var
    this.count.set(0);
  }

}


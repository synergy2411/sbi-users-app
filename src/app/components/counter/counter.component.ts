import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounter } from 'src/app/model/counter';
import * as CounterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;

  constructor(private store : Store<ICounter>) { }

  ngOnInit(): void {
    // this.store.select("counter");
    this.store.subscribe(state => {
      // console.log("[STORE STATE]", state);
      this.counter = state['ctr'].counter;
    })
  }

  onIncrease(){
    this.store.dispatch({type : "INCREMENT"})
  }

  onDecrease(){
    // this.store.dispatch({type : CounterActions.DECREMENT});
    this.store.dispatch(new CounterActions.onDecrement());
  }

  onAdd(value: number){
    this.store.dispatch(new CounterActions.onAdd(value));
  }
  onSubtract(value : number){
    this.store.dispatch(new CounterActions.onSubtract(value));
  }

  onReset(){
    this.store.dispatch(new CounterActions.onReset());
  }
}

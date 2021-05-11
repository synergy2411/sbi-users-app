import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;

  constructor(private store : Store<any>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      console.log("[STORE STATE]", state);
      this.counter = state['ctr'].counter;
    })
  }

}

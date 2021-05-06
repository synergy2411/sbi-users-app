import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes")
    }, 3000);
  })
  contact_number : number = 987654321;

  todoList = [
    {label : "pot the plant", status : 'done'},
    {label : "buy the pulses", status : 'pending'},
    {label : "renew car insurance", status : 'done'},
    {label : "buy the jeans", status : 'pending'},
  ]

  filteredStatus : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(){
    // this.todoList = [];
    this.todoList.push({label : "New Item", status : "pending"});
  }

}

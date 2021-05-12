import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby-demo',
  templateUrl: './trackby-demo.component.html',
  styleUrls: ['./trackby-demo.component.css']
})
export class TrackbyDemoComponent implements OnInit {

  items = [
    {id: 1, label : "read books", status : true},
    {id: 2, label : "pot the plants", status : false}
  ]

  onLoadItems(){
    this.items = [
      {id: 1, label : "read books", status : true},
    {id: 2, label : "pot the plants", status : false},
    {id: 3, label : "buy jeans", status : false}
    ]
  }

  trackById(index, item){
    return item.id
  }

  constructor(private cdRef : ChangeDetectorRef) { }

  detech(){
    this.cdRef.detach();
  }

  reattach(){
    this.cdRef.reattach();
  }

  ngOnInit(): void {
  }

}

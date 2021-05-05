import { AfterContentChecked, AfterContentInit, AfterViewChecked,
      AfterViewInit, Component, DoCheck, Input, OnChanges,
      OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements
OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() user : User;
  @Input() showComp : boolean;

  constructor(){
    // console.log("constructor");
  }

  ngOnChanges(changes : SimpleChanges){
    // debugger;
    // console.log("ngOnChanges", changes);
  }
  ngOnInit(){
    // debugger;
    // console.log("ngOnInit")
  }
  ngDoCheck(){
    // debugger;
    // console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    // debugger;
    // console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    // console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    // debugger;
    // console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    // console.log("ngOnDestroy")
  }

}

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

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges", changes);
  }
  ngOnInit(){ console.log("ngOnInit") }
  ngDoCheck(){ console.log("ngDoCheck") }
  ngAfterContentInit(){ console.log("ngAfterContentInit") }
  ngAfterContentChecked(){console.log("ngAfterContentChecked") }
  ngAfterViewInit(){console.log("ngAfterViewInit") }
  ngAfterViewChecked(){ console.log("ngAfterViewChecked")}
  ngOnDestroy(){ console.log("ngOnDestroy") }

}

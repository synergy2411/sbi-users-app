import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { map, tap, take  } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  numbers = [1,2,3,4,5];
  myObsFromArray$ = from(this.numbers);

  unsub$ : Subscription;

  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next("First Package");
    }, 2000);
    setTimeout(() => {
      observer.next("Second Package");
    }, 4000);
    setTimeout(() => {
      observer.next("Third Package");
    }, 7000);

    setTimeout(() => {
      observer.error(new Error("Something bad happened!"));
    }, 8000);

    setTimeout(() => {
      observer.complete();
    }, 9000);
  });

  onUnsubscribe(){
    this.unsub$.unsubscribe();
  }


  onSubscribe(){

    this.myObsFromArray$.pipe(take(3)).subscribe(
      data => console.log("[FROM ARRAY OBS]", data)
    )

    this.unsub$ = this.obs$.pipe(map((value) => {
      return "My " + value;
    }), tap((value) => {
      console.log("[TAP]", value);
      return value;
    })).subscribe(
      (data) => { console.log(data);},
      (err) => {console.error(err)},
      () => {console.log("[COMPLETE]")}
    )
  }

  constructor() { }

  ngOnInit(): void {
  }

}

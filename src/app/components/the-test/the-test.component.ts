import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-the-test',
  templateUrl: './the-test.component.html',
  styleUrls: ['./the-test.component.css'],
  providers:  [TestService]
})
export class TheTestComponent implements OnInit {

  title = "The Test Environment";
  theUser : {email : string, age : number};

  constructor(private testService : TestService) { }

  ngOnInit(): void {
    this.theUser = this.testService.getUser();
  }

}

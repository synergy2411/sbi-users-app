import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test.service';

import { TheTestComponent } from './the-test.component';

describe('TheTestComponent', () => {
  let component: TheTestComponent;
  let fixture: ComponentFixture<TheTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTestComponent ],
      providers : [TestService]
    })
    .compileComponents();
  });

  let testService : TestService;

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTestComponent);
    component = fixture.componentInstance;
    testService = new TestService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should be truthy", () => {
    expect(1).toEqual(1);
  })
  it("Should be failed", () => {
    let user = {name : "Foo"};
    expect(user.name).toEqual("Foo");
  })

  // TDD -  Write the test, make them fail, write the code, make them pass;

  it("Should have title property", () => {
    expect(component.title).toEqual("The Test Environment");
  })

  it("theUser should get value from TestService", () => {
    const {email, age} = testService.getUser();
    expect(component.theUser.email).toEqual(email);
  })

  it("Should render the email on template",() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#the-email").textContent).toContain("test@test.com");
  })

});

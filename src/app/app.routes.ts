import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { UsersComponent } from "./components/users/users.component";
import { NewEmployeeComponent } from "./modules/employee/components/new-employee/new-employee.component";
import { LoginGaurdService } from "./services/login-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "",             // http://localhost:4200
    redirectTo : "login",
    pathMatch : "full"
  },{
    path : "login",       // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",            // http://localhost:4200/register
    component : RegisterComponent
  },{
    path : "pipe-demo",           // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "observable-demo",       // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  }, {
    path : "users",
    component : UsersComponent,
    canActivate: [LoginGaurdService]
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {
        path : "overview/:id/:pName",                  // http://localhost:4200/product/overview
        component : OverviewComponent
      },{
        path : "specification",       // http://localhost:4200/product/specification
        component : SpecificationComponent
      }
    ]
  },{
    path : 'new-employee',
    component : NewEmployeeComponent
  },{
    path : "**",
    redirectTo : "login",
    pathMatch : 'full'              // http://localhost:4200/pathdoesnotexist
  }
]

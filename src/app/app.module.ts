import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DelayDirective } from './directives/delay.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { EmployeeModule } from './modules/employee/employee.module';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import CounterReducer from "./store/reducers/counter.reducer";
import { TheTestComponent } from './components/the-test/the-test.component';
import { TrackbyDemoComponent } from './components/trackby-demo/trackby-demo.component';


@NgModule({
  declarations: [     // Components, Pipes & Directives
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent,
    HighlightDirective,
    BetterHighlightDirective,
    DelayDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    CounterComponent,
    TheTestComponent,
    TrackbyDemoComponent
  ],
  imports: [          // Modules - Built-in / Custom
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    EmployeeModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({
      ctr : CounterReducer
    }),
    StoreDevtoolsModule.instrument({logOnly : true})
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    }
   ],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }

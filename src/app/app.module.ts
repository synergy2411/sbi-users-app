import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DelayDirective } from './directives/delay.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';

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
    ObservableDemoComponent
  ],
  imports: [          // Modules - Built-in / Custom
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
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

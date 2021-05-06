import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DelayDirective } from './directives/delay.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';

@NgModule({
  declarations: [     // Components, Pipes & Directives
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent,
    HighlightDirective,
    BetterHighlightDirective,
    DelayDirective,
    PipeDemoComponent,
    CountryCodePipe
  ],
  imports: [          // Modules - Built-in / Custom
    BrowserModule, FormsModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';

@NgModule({
  declarations: [     // Components, Pipes & Directives
    AppComponent, UsersComponent, UserImgComponent
  ],
  imports: [          // Modules - Built-in / Custom
    BrowserModule, FormsModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }

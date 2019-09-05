import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailvalidatorDirective } from './emailvalidator.directive';
import { PasswordvalidatorDirective } from './passwordvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailvalidatorDirective,
    PasswordvalidatorDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

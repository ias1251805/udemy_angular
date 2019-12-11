import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SuccessAlertComponent } from './success-alert/success-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

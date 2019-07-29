import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './cump/form/form.component';
import { C1Component } from './c/c1/c1.component';
import { C2Component } from './c/c2/c2.component';
import { C3Component } from './c/c3/c3.component';
import { C4Component } from './c/c4/c4.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

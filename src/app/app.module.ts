import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LaboralInfoModule} from "./common/components/laboral_info/laboral_info.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PersonalInfoModule} from "./common/components/personal_info/personal_info.module";
import {ProductInfoModule} from "./common/components/product_info/product_info.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    LaboralInfoModule,
    PersonalInfoModule,
    ProductInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

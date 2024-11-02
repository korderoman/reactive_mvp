import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {ProductInfoContainer} from "./product_info.container";
import {ProductInfoComponent} from "./product_info.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[ProductInfoContainer, ProductInfoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProductInfoContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductInfoModule {}

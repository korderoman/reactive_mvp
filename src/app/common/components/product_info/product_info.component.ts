import {Component} from "@angular/core";
import {ProductInfoPresenter} from "./product_info.presenter";

@Component({
  selector:'app-product-info-ui',
  templateUrl:'./product_info.component.html',
  providers:[ProductInfoPresenter]
})
export class ProductInfoComponent {
  public constructor(public readonly productInfoPresenter:ProductInfoPresenter) {}
}

import {Injectable} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductInfoForm} from "../../interfaces";
import {AppPresenter} from "../../../app.presenter";

@Injectable()
export class ProductInfoPresenter {
  public productName!:FormControl<string | null>;
  public form!:FormGroup<ProductInfoForm>;
  public constructor(private fb:FormBuilder,  private parentForm:AppPresenter) {
    this.createControls();
    this.initForm();
    this.parentForm.form.addControl('productInfo',this.form)
  }

  private createControls():void {
    this.productName = new FormControl<string| null>(null, Validators.required);
  }

  private initForm():void {
    this.form=this.fb.group<ProductInfoForm>({productName:this.productName});
  }
}

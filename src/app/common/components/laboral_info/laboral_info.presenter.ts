import {Injectable} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LaboralInfoForm} from "../../interfaces";
import {AppPresenter} from "../../../app.presenter";

@Injectable()
export class LaboralInfoPresenter {
  public laboralName!: FormControl<string | null>;
  public form!: FormGroup<LaboralInfoForm>;

  public constructor(private readonly fb: FormBuilder, private  parentForm:AppPresenter) {
    this.createControls();
    this.initForm();
    this.parentForm.form.addControl('laboralInfo', this.form)

  }

  private createControls():void {
    this.laboralName = new FormControl<string | null>(null, Validators.required);
  }

  private initForm(): void {
    this.form= this.fb.group<LaboralInfoForm>({laboralName:this.laboralName})
  }
}

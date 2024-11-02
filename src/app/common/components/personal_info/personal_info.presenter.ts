import {Injectable} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonalInfoForm} from "../../interfaces";
import {AppPresenter} from "../../../app.presenter";

@Injectable()
export class PersonalInfoPresenter {
  public personalName!:FormControl<string | null>;
  public form!: FormGroup<PersonalInfoForm>;

  public constructor(private fb: FormBuilder, private parentForm:AppPresenter) {
    this.createControls();
    this.initForm();
    this.parentForm.form.addControl('personalInfo',this.form);
  }


  private createControls():void {
    this.personalName = new FormControl<string| null>(null, Validators.required);
  }

  private initForm():void {
    this.form=this.fb.group<PersonalInfoForm>({personalName:this.personalName});
  }
}

import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ParentForm} from "./common/interfaces";

@Injectable()
export class AppPresenter {

  public form!: FormGroup<ParentForm>;

  public constructor(private fb: FormBuilder) {
    this.form = this.fb.group<ParentForm>({})
  }
}

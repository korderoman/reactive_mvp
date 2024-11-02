import {Component} from "@angular/core";
import {PersonalInfoPresenter} from "./personal_info.presenter";

@Component({
  selector:'app-personal-info-ui',
  templateUrl:'./personal_info.component.html',
  providers:[PersonalInfoPresenter]
})
export class PersonalInfoComponent {

  public constructor(public readonly personalInfoPresenter:PersonalInfoPresenter) {
  }
}

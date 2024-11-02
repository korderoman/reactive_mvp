import {Component} from "@angular/core";
import {LaboralInfoPresenter} from "./laboral_info.presenter";

@Component({
  selector:'app-laboral-info-ui',
  templateUrl:'./laboral_info.component.html',
  providers:[LaboralInfoPresenter]
})
export class LaboralInfoComponent {

  public constructor(public readonly laboralInfoPresenter:LaboralInfoPresenter) {
  }
}

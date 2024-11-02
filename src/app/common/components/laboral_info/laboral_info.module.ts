import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {LaboralInfoContainer} from "./laboral_info.container";
import {LaboralInfoComponent} from "./laboral_info.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LaboralInfoContainer, LaboralInfoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports:[LaboralInfoContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LaboralInfoModule {}

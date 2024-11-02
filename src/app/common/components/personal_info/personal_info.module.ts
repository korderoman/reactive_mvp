import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {PersonalInfoContainer} from "./personal_info.container";
import {PersonalInfoComponent} from "./personal_info.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[PersonalInfoContainer, PersonalInfoComponent],
  imports:[CommonModule, ReactiveFormsModule],
  exports:[PersonalInfoContainer],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalInfoModule {}

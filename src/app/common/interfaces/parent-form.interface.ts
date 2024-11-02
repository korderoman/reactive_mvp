import {FormGroup} from "@angular/forms";
import {PersonalInfoForm} from "./personal-info.interface";
import {LaboralInfoForm} from "./laboral-info.interface";
import {ProductInfoForm} from "./product-info.interface";

export interface ParentForm {
    personalInfo?:FormGroup<PersonalInfoForm>;
    laboralInfo?:FormGroup<LaboralInfoForm>;
    productInfo?:FormGroup<ProductInfoForm>;
}

import { Component } from '@angular/core';
import {AppPresenter} from "./app.presenter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppPresenter]
})
export class AppComponent {
  title = 'shared_forms_v2';

  public constructor(public readonly parentForm:AppPresenter) {
  }

  public onSendForm():void {
    console.log("enviando")
  }
}

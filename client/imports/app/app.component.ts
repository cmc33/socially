import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Parties } from '../../../both/collections/parties.collection';
import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  parties: Observable<any[]>;
 
  constructor() {
    this.parties = Parties.find({}).zone();
  }
}
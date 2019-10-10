import {Component} from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public text: string;

  constructor() {
    this.text = "Choose which hall you want to view";
  }
}

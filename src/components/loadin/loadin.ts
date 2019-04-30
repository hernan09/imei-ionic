import { Component } from '@angular/core';

/**
 * Generated class for the LoadinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loadin',
  templateUrl: 'loadin.html'
})
export class LoadinComponent {

  text: string;

  constructor() {
    console.log('Hello LoadinComponent Component');
    this.text = 'Hello World';
  }

}

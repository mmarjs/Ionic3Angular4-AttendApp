import { Component, Input } from '@angular/core';

/**
 * Generated class for the MessagesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-messages',
  templateUrl: 'messages.html'
})
export class MessagesComponent {
  @Input() messages: any;


  constructor() {
  }

  showMessage(message) {
    console.log("Show Message")
  }

}

import { Component, Input } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SpeakerDetailsPage } from '../../pages/pages'

/**
 * Generated class for the SpeakersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersComponent {
 @Input() speakers: any;
  constructor(public navCtrl: NavController) {}

  public showSpeaker (speaker) {
    this.navCtrl.push(SpeakerDetailsPage, speaker);
  }

}

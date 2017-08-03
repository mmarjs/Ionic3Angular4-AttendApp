import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakerDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-speaker-details',
  templateUrl: 'speaker-details.html',
})
export class SpeakerDetailsPage {
  speaker:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speaker = navParams.data;
  }

  ionViewDidLoad() {
    
  }

}

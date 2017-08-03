import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { SpeakerDetailsPage } from '../../pages/pages'

/**
 * Generated class for the AgendaItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-agenda-item',
  templateUrl: 'agenda-item.html',
})
export class AgendaItemPage {
  item:any;
  constructor(private navParams: NavParams, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.data;
  }

  showSpeaker(speaker) {
    this.navCtrl.push(SpeakerDetailsPage, speaker);
  }

}

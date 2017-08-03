import { Component } from '@angular/core';
//import {  NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SignInPage  } from '../pages'
import { AttendeeApiProvider } from '../../providers/attendee-api/attendee-api';

/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  html:any;
  constructor(private modalCtrl: ModalController,
          private attendeeApi: AttendeeApiProvider) {
  }

  ionViewDidLoad() {
    this.attendeeApi.getInfo().subscribe(data => this.html = data);
  }
   ShowUserDetailsModal (){
    let modal = this.modalCtrl.create(SignInPage);
     modal.present();
  }

}

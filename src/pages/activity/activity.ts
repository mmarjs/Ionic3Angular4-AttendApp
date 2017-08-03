import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {  NavController } from 'ionic-angular';

import { AttendeeApiProvider } from '../../providers/attendee-api/attendee-api';
import { SignInPage, ActivityDetailsPage  } from '../pages'

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activities:any = [];
  constructor(private modalCtrl: ModalController,
          private attendeeApi: AttendeeApiProvider,
          private navCtrl: NavController) {
  }

 ionViewDidLoad() {
    this.attendeeApi.getActivities().subscribe(data => this.activities = data);
  }


  ShowUserDetailsModal (){
    let modal = this.modalCtrl.create(SignInPage);
     modal.present();
  }

  showActivity(activity) {
    this.navCtrl.push(ActivityDetailsPage, activity);
  }

}

import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html',
})
export class ActivityDetailsPage {
  activity:any;
  constructor(private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.activity = this.navParams.data
  }

}

import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SignInPage  } from '../pages'
import { AttendeeApiProvider } from '../../providers/attendee-api/attendee-api';

/**
 * Generated class for the NetworkingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-networking',
  templateUrl: 'networking.html',
})
export class NetworkingPage {
  delegates:any;
  messages: any;
  constructor(private modalCtrl: ModalController,
          private attendeeApi: AttendeeApiProvider
        ) 
        {}

  currentView:string = 'delegates'

  ionViewDidLoad() {
    this.attendeeApi.getDelegates().subscribe(data => this.delegates = data);
    this.attendeeApi.getMessages().subscribe(data => this.messages = data);
  }
   ShowUserDetailsModal (){
    let modal = this.modalCtrl.create(SignInPage);
     modal.present();
  }
}

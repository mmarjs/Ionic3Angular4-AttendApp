import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SignInPage  } from '../pages'
import { AttendeeApiProvider } from '../../providers/attendee-api/attendee-api';

/**
 * Generated class for the ProgramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  speakers:any;
  agenda:any;
  constructor(private attendeeApi: AttendeeApiProvider, private modalCtrl: ModalController) {
  }
  currentView:string = 'schedule'
 
ionViewDidLoad() {
    this.attendeeApi.getSpeakers().subscribe(data => this.speakers = data);
    this.attendeeApi.getAgenda().subscribe(data => this.agenda = data);
}
  
ShowUserDetailsModal (){
  let modal = this.modalCtrl.create(SignInPage);
    modal.present();
}

}

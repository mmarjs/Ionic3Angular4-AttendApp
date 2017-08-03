import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SignInPage  } from '../pages'

/**
 * Generated class for the SurveyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  ShowUserDetailsModal (){
  let modal = this.modalCtrl.create(SignInPage);
    modal.present();
}

}

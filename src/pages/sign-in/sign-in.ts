import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }
}

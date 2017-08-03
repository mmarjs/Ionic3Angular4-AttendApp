import { Component, Input } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DelegateDetailsPage } from '../../pages/pages';
// import * as _ from 'lodash';
/**
 * Generated class for the DelegatesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-delegates',
  templateUrl: 'delegates.html'
})
export class DelegatesComponent {

  @Input() delegates: any;
  fullList:any;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
    
  }

  public showDelegate (delegate) {
    this.navCtrl.push(DelegateDetailsPage, delegate.id);
  }

  getItems(ev) { 
    let val = ev.target.value; 

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.delegates = this.delegates.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

import { Component, Input } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { AgendaItemPage } from '../../pages/pages'

import * as _ from 'lodash';

/**
 * Generated class for the ScheduleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent {

 @Input() agenda: any;

  items:any;
  daysOfWeek:any;
  selectedDay:any = "Sun"; 
  weekday:any;
  constructor(private navCtrl: NavController) {
    
  }
  ngOnChanges() { 
    this.items = _.cloneDeep(this.agenda);

    this.weekday = new Array(7);
    this.weekday[0] =  "Sun";
    this.weekday[1] = "Mon";
    this.weekday[2] = "Tus";
    this.weekday[3] = "Wed";
    this.weekday[4] = "Thr";
    this.weekday[5] = "Fri";
    this.weekday[6] = "Sat";

    var dates = _.map(this.agenda, (item:any) => {
      var x = new Date(item.dateTime).getDay();
      return this.weekday[x];

    });

    this.daysOfWeek = _.uniq(dates);


   }
   selectDay(day) {
     var dayIndex = this.weekday.indexOf(day);
      this.items = _.filter(this.agenda, (item:any) => {
          return dayIndex == new Date(item.dateTime).getDay()
      });

   }

   showAgendaItem(item) {
     this.navCtrl.push(AgendaItemPage, item);
   }

}

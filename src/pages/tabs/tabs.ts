import { Component } from '@angular/core';


import { ProgramPage, InfoPage, NetworkingPage, SurveyPage, ActivityPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = ProgramPage;
  tab2Root = ActivityPage;
  tab3Root = InfoPage;
  tab4Root = NetworkingPage;
  tab5Root = SurveyPage;

  constructor() {

  }
}

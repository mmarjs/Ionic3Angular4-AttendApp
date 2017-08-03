import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { InfoPage, TabsPage, ProgramPage, NetworkingPage, 
          SurveyPage, ActivityPage, SignInPage, DelegateDetailsPage, 
          ActivityDetailsPage, SpeakerDetailsPage, AgendaItemPage } from '../pages/pages'
import { SpeakersComponent, ScheduleComponent } from '../components/component'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AttendeeApiProvider } from '../providers/attendee-api/attendee-api';
import { DelegatesComponent } from '../components/delegates/delegates';
import { MessagesComponent } from '../components/messages/messages';


@NgModule({
  declarations: [
    MyApp,
    ProgramPage,
    InfoPage,
    TabsPage,
    ActivityPage,
    NetworkingPage,
    SurveyPage,
    ScheduleComponent,
    SpeakersComponent,
    SignInPage,
    DelegatesComponent,
    MessagesComponent,
    DelegateDetailsPage,
    ActivityDetailsPage,
    SpeakerDetailsPage,
    AgendaItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProgramPage,
    TabsPage,
    InfoPage,
    ActivityPage,
    NetworkingPage,
    SurveyPage,
    SignInPage,
    DelegateDetailsPage,
    ActivityDetailsPage,
    SpeakerDetailsPage,
    AgendaItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AttendeeApiProvider
  ]
})
export class AppModule {}

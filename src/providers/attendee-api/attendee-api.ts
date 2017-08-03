import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map';

/*
  Generated class for the AttendeeApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AttendeeApiProvider {

  constructor(private http: Http) {
    
  }

  getAgenda() : Observable<Response> {
    return this.http.get('/assets/data/agenda.json')
                    .map((response: Response) => <Response>response.json())
  }

  getSpeakers() : Observable<Response> {
    return this.http.get('/assets/data/speakers.json')
                    .map((response: Response) => <Response>response.json())
  }

  getDelegates() : Observable<Response> {
    return this.http.get('/assets/data/delegates.json')
                    .map((response: Response) => <Response>response.json())
  }

  getMessages() : Observable<Response> {
    return this.http.get('/assets/data/messages.json')
                    .map((response: Response) => <Response>response.json())
  }

  getActivities() : Observable<Response> {
    return this.http.get('/assets/data/activities.json')
                    .map((response: Response) => <Response>response.json())
  }


  getInfo() : Observable<string> {
    return this.http.get('/assets/data/info.html')
                    .map((response: Response) => response.text())
  }


}

import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Http } from '@angular/http';

@Injectable()
export class CrashService {

  //Local
  //private URL:string = "http://localhost/treds.virginia.gov";
  //TEST
  private URL:string = "https://treds-t.dmv.virginia.gov";
  constructor(private messageService: MessageService, private http: Http) { }

  getCrashes(StartDate:string, EndDate:string){
    this.messageService.add('CrashService: getting crashes from server StartDate = ' + StartDate + ' ,EndDate = ' + EndDate);
    return this.http.get(this.URL + '/Crash/Crash/GetCrashes/?StartDate=' + StartDate + '&EndDate=' + EndDate)
    .map(x => x.json());
  }

  getCrashDetail(docNum:string)
  {
    this.messageService.add('CrashService: getting crash details for ' + docNum + ' from server');
    return this.http.get(this.URL + '/Crash/Crash/Search/?DocumentNumber=' + docNum)
    .map(x => x.json());
  }

}

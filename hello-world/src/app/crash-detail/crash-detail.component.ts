import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Crash } from './crash';
import { CrashService } from '../crash.service';

@Component({
  selector: 'app-crash-detail',
  templateUrl: './crash-detail.component.html',
  styleUrls: ['./crash-detail.component.css']
})
export class CrashDetailComponent implements OnInit {

  crash:Crash;
  constructor(private route:ActivatedRoute,private crashService:CrashService,private location:Location) { }

  ngOnInit() {
    this.getCrashData();
  }

  getCrashData(){
    var id:string = this.route.snapshot.paramMap.get('id');
    //debugger;
    console.log("Calling the crash service to get the crash data for id = " + id);
    this.crashService.getCrashDetail(id).subscribe(
      crash => { 
        this.crash = crash;
        //debugger;
        console.log("Total Diagrams = " + this.crash.diagrams.length); 
      });
  }

  goBack():void{
    this.location.back();
  }
}

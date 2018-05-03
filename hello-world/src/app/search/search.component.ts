import { Component, OnInit } from '@angular/core';
import { CrashService } from '../crash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  StartDate:string;
  EndDate:string;
  Crashes:string[];

  columnDefs = [
    {headerName: 'S.No', field: 'sno' },
    {headerName: 'Document#', field: 'docnum' }
  ];

  rowData = [];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: 'multiple',
    rowData: null,
    onRowSelected: this.onRowSelected
  };

onRowSelected(event) {
    //window.alert("row " + event.node.data.docnum + " selected = " + event.node.selected);
    if (event.node.selected){
      window.location.href = "/Crash/" + event.node.data.docnum;
    }
}

  constructor(private crashService:CrashService) { }

  ngOnInit() {
    //Set the default dates.
    this.StartDate = "1/1/2017";
    this.EndDate = "1/3/2017";
  }

  getCrashes(){
    //Call the crash servier to search the crash
    console.log('Calling searchCrash.');
    this.crashService.getCrashes(this.StartDate, this.EndDate).subscribe(crashes => {
      console.log(crashes);
      this.Crashes = crashes;
      var counter=0;
      this.rowData = this.Crashes.map(x => {
        return {"sno": ++counter, "docnum" : x};
      });
      
      console.log(this.rowData);
    });
  }

}

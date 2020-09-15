import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/data.service';
import { HeaderService} from '../../../../services/header.service';
import { MatDialog } from '@angular/material/dialog';
import {ConsService } from '../../../../services/cons.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export interface rowsa{
  number: number;
  name: string;
  contact: string;
  position: string;
  date: string;
  procent: string;
  isOpen: boolean ;
}
@Component({
  selector: 'app-ready-staff',
  templateUrl: './ready-staff.component.html',
  styleUrls: ['./ready-staff.component.css'],
  providers: [ConsService, HeaderService, DataService , MatButtonToggleModule]
})
export class ReadyStaffComponent implements OnInit {
   name: string = '';
   isSearchByName: boolean = true;
   AddStaff: boolean = true;
   title = [];
   rows: rowsa[] = [];
   NewEmployee = {};
   sortedData = [];
  constructor(
   public dialog: MatDialog,
   public consService: ConsService,
   public headerService: HeaderService,
   public dataService: DataService)
  {
      this.sortedData = this.rows.slice();
  }
  onSortDirection(showActive: boolean): void{
   if (showActive){
    this.sortedData = this.rows.filter((row) => row.isOpen === true); }
   else {
     this.sortedData = this.rows.filter((rows) => rows.isOpen === false); }
  }
  onSortAlpha(): void {
      this.sortedData = this.rows.sort(function(a, b)
      { const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
          { return -1; }
        if (nameA > nameB)
          { return 0; }});
  }
  public kiki(status): void {
      console.log(status);
  }
  public search(name, isSearchByName): void {
    if ( isSearchByName ) {
      this.sortedData = this.rows.filter((rows) => rows.name === name);
      }
    else {
        this.sortedData = this.rows.filter((rows) => rows.position === name);
      }
  }
  public change(): void {
    this.isSearchByName = !this.isSearchByName;
  }
  addSotr( NewEmployee): void {
    this.dataService.addSotr(NewEmployee);
  }
  toogle(): void {
    this.AddStaff = !this.AddStaff;
  }
  ngOnInit(): void {
    this.consService.cons(this.sortedData);
    this.title = this.headerService.getData();
    this.sortedData = this.dataService.getSortedData();
    this.rows = this.dataService.getRows();
    this.NewEmployee = this.dataService.getMass();
  }

}

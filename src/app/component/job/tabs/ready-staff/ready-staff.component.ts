import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataService} from '../../../../services/data.service';
import { HeaderService} from '../../../../services/header.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsService } from '../../../../services/cons.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { rowsa } from '../../../../services/data.service';

@Component({
  selector: 'app-ready-staff',
  templateUrl: './ready-staff.component.html',
  styleUrls: ['./ready-staff.component.css'],
  providers: [ConsService, HeaderService, DataService , MatButtonToggleModule]
})
export class ReadyStaffComponent implements OnInit {
  @Input() rows: rowsa[] = [];
  @Input() sortedData = [];
  @Input() NewEmployee: object;
  @Output() addSotr = new EventEmitter<object>();
   name: string = '';
   isSearchByName: boolean = true;
   AddStaff: boolean = true;
   title = [];


  constructor(
   public dialog: MatDialog,
   public consService: ConsService,
   public headerService: HeaderService)
  {
      this.sortedData = this.rows.slice();
  }

  addEmployee(NewEmployee) {
    this.addSotr.emit(NewEmployee);
  }
  onSortDirection(showActive: boolean): void{
   if (showActive){
     this.sortedData = this.rows.filter((rows) => rows.isOpen === false); }
  }
  onSortAlpha(): void {
      this.sortedData = this.rows.sort((a, b) => {
        const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
            { return -1; }
        if (nameA > nameB) {
            return 0; }
      });
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
  cons(){console.log(this.sortedData);}
    toogle(): void {
    this.AddStaff = !this.AddStaff;
  }
  ngOnInit(): void {

    this.consService.cons(this.sortedData);
    this.title = this.headerService.getData();
  }

}

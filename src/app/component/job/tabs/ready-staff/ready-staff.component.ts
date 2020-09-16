import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { DataService} from '../../../../services/data.service';
import { TitleService} from '../../../../services/title.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsService } from '../../../../services/cons.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { rowsa } from '../../../../services/data.service';

@Component({
  selector: 'app-ready-staff',
  templateUrl: './ready-staff.component.html',
  styleUrls: ['./ready-staff.component.css'],
  providers: [ConsService, TitleService, DataService , MatButtonToggleModule]
})
export class ReadyStaffComponent implements
  OnInit ,
  OnDestroy ,
  OnChanges ,
  AfterViewInit ,
  AfterContentChecked ,
  AfterViewChecked ,
  DoCheck ,
  AfterContentInit
  {
  @Input() DataStaff: rowsa[] = [];
  @Input() sortedData = [];
  @Input() NewEmployee: rowsa;
  @Output() addEmployee = new EventEmitter<object>();
   name: string = '';
   isSearchByName: boolean = true;
   AddStaff: boolean = true;
   title = [];


  constructor(
   public dialog: MatDialog,
   public consService: ConsService,
   public titleService: TitleService)
  {
      this.sortedData = this.DataStaff.slice();
  }

  addEmployes(NewEmployee) {
    this.addEmployee.emit(NewEmployee);
  }
  onSortDirection(showActive: boolean): void{
   if (showActive){
     this.sortedData = this.DataStaff.filter((DataStaff) => DataStaff.isOpen === false); }
  }
  onSortAlpha(): void {
      this.sortedData = this.DataStaff.sort((a, b) => {
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
      this.sortedData = this.DataStaff.filter((DataStaff) => DataStaff.name === name);
      }
    else {
        this.sortedData = this.DataStaff.filter((DataStaff) => DataStaff.position === name);
      }
  }
  public change(): void {
    this.isSearchByName = !this.isSearchByName;
  }

  cons(): void {console.log(this.sortedData); }
    toogle(): void {
    this.AddStaff = !this.AddStaff;
  }
  ngOnInit(): void {

    this.consService.cons(this.NewEmployee);
    this.title = this.titleService.getData();
  }
  ngOnDestroy(): void  { console.log(`onDestroy`); }
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes[this.DataStaff];
    console.log(change);
  }
  ngAfterViewInit(): void  {
    console.log('AfterInit');
  }
  ngAfterContentChecked(): void  {
    console.log('AfterContentCheck');
  }
  ngAfterViewChecked(): void  {
    console.log('Afterview');
  }
  ngDoCheck(): void  {
    console.log('DOCheck');
  }
  ngAfterContentInit(): void  {
    console.log('AfterContentInit');
  }
  }

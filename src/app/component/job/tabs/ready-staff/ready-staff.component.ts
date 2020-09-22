import {
  Component,
  Input,
  OnInit,
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
  styleUrls: ['./ready-staff.component.scss'],
  providers: [ConsService, TitleService, DataService , MatButtonToggleModule]
})
export class ReadyStaffComponent implements
  OnInit {
  constructor(
    public dialog: MatDialog,
    public consService: ConsService,
    public titleService: TitleService,
    public dataService: DataService) {
    this.sortedData = this.DataStaff.slice();
  }

  DataStaff: rowsa[] = [];
  sortedData = [];
  NewEmployee: rowsa;
  name: string = '';
  isSearchByName: boolean = true;
  title = [];
  saved: boolean = false;

  onSortDirection(showActive: boolean): void {
    if (showActive) {
      this.sortedData = this.DataStaff.filter(
        (DataStaff) => DataStaff.isOpen === false);
    }
  }

  onSortAlpha(): void {
    this.sortedData = this.DataStaff.sort((a, b) => {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 0;
      }
    });
  }

  public kiki(status): void {
    console.log(status);
  }

  public search(name, isSearchByName): void {
    if (isSearchByName) {
      this.sortedData = this.DataStaff.filter(
        (DataStaff) => DataStaff.name === name);
    } else {
      this.sortedData = this.DataStaff.filter(
        (DataStaff) => DataStaff.position === name);
    }
  }

  public change(): void {
    this.isSearchByName = !this.isSearchByName;
  }

  cons(): void {
    console.log(this.sortedData);
  }

  ngOnInit(): void {
    this.title = this.titleService.getData();
    this.NewEmployee = this.dataService.getMass();
    this.DataStaff = this.dataService.getDataStaff();
    this.sortedData = this.dataService.getSortedData();
    this.consService.cons(this.sortedData);
  }
}

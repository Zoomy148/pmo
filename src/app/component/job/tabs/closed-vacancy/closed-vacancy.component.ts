import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../services/title.service';
import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-closed-vacancy',
  templateUrl: './closed-vacancy.component.html',
  styleUrls: ['./closed-vacancy.component.scss'],
  providers: []
})
  export class ClosedVacancyComponent implements OnInit {
  title1 = [];
  VacancyData = [];

  constructor(
    public titleService: TitleService ,
    public dataService: DataService,
  ) {}
  onSortDirection(showActive: boolean): void {
    if (showActive) {
      this.VacancyData = this.VacancyData.filter(
        (VacancyData) => VacancyData.status === true);
    }
    if (!showActive) {
      this.VacancyData = this.VacancyData.filter(
        (VacancyData) => VacancyData.status === !true);
    }
  }
  public changeStatusOpen(status): void {
    status = true;
    console.log(status);
  }
  public changeStatusFalse(status): void {
    status = false;
    console.log(status);
  }
  public changeStatusMeet(status): void {
    status = 'Назначена Встреча';
    console.log(status);
  }
  onSortAlpha(): void {
    this.VacancyData = this.VacancyData.sort((a, b) => {
      const nameA = a.contact.toLowerCase(), nameB = b.contact.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 0;
      }
    });
  }
  ngOnInit(): void {
    this.title1 = this.titleService.getData1();
    this.VacancyData = this.dataService.getRowsp();
    console.log(this.VacancyData);
  }
}

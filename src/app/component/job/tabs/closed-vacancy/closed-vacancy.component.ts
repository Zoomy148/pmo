import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../services/title.service';
import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-closed-vacancy',
  templateUrl: './closed-vacancy.component.html',
  styleUrls: ['./closed-vacancy.component.scss'],
  providers: [ TitleService, DataService]
})
  export class ClosedVacancyComponent implements OnInit {
  title1 = [];
  VacancyData = [];

  constructor(
    public titleService: TitleService ,
    public dataService: DataService,
      ) {}

  ngOnInit(): void {
    this.title1 = this.titleService.getData1();
    this.VacancyData = this.dataService.getRowsp();

  }

}

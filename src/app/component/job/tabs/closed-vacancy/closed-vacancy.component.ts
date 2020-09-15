import { Component, OnInit } from '@angular/core';
import { HeaderService} from '../../../../services/header.service';
import { DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-closed-vacancy',
  templateUrl: './closed-vacancy.component.html',
  styleUrls: ['./closed-vacancy.component.css'],
  providers:[HeaderService, DataService]
})
  export class ClosedVacancyComponent implements OnInit {
  title1 = [];
  VacancyData = [];
  constructor(
    public headerService: HeaderService ,
    public dataService: DataService ) { }

  ngOnInit(): void {
    this.title1 = this.headerService.getData1();
    this.VacancyData = this.dataService.getRowsp();
}

}

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
headers1 = [];
rowsp = [];
  constructor(public headerService: HeaderService , public dataService: DataService ) { }

  ngOnInit(): void {
    this.headers1 = this.headerService.getData1();
    this.rowsp = this.dataService.getRowsp();
  }

}

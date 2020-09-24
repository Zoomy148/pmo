import { Component, OnInit } from '@angular/core';
import {commerce, DataService} from '../../../../services/data.service';


@Component({
  selector: 'app-commerce-page',
  templateUrl: './commerce-page.component.html',
  styleUrls: ['./commerce-page.component.css']
})
export class CommercePageComponent implements OnInit {
  commerceDataArchive: commerce[] = [];
  commerceDataActive: commerce[] = [];
  toogle = true;
  changeToogleToTrue() {
    this.toogle = true;
  }
  changeToogleToFalse() {
    this.toogle = false;
  }
  constructor(public dataService: DataService ) { }

  ngOnInit(): void {
    this.commerceDataArchive = this.dataService.getCommerceDataArchive();
    this.commerceDataActive = this.dataService.getCommerceDataActive();
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService, presale} from '../../../../services/data.service';

@Component({
  selector: 'app-presale-page',
  templateUrl: './presale-page.component.html',
  styleUrls: ['./presale-page.component.css']
})
export class PresalePageComponent implements OnInit {
  toogle = true;
  presaleDataArchive: presale[] = [];
  presaleDataActive: presale[] = [];
  changeToogleToTrue() {
    this.toogle = true;
  }
  changeToogleToFalse() {
    this.toogle = false;
  }
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.presaleDataArchive = this.dataService.getPresaleDataArchive();
    this.presaleDataActive = this.dataService.getPresaleDataActive();
  }

}

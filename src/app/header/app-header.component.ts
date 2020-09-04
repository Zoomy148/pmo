import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}

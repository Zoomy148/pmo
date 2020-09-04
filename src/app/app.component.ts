import { Component } from '@angular/core';
import {MenuService} from './services/menu.service';
import {AppmenuItems} from './component/app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public menuService: MenuService) {
    menuService.items = AppmenuItems;
  }
}

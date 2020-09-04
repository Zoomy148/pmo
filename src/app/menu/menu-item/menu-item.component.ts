import {Component, Input, OnInit} from '@angular/core';
import {MenuItem, MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
@Input() item: MenuItem;
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}

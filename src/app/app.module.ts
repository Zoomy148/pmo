import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaffComponent } from './component/staff/staff.component';
import { EmploymentComponent } from './component/employment/employment.component';
import { JobComponent } from './component/job/job.component';
import { AppHeaderComponent } from './header/app-header.component';
import {MenuService} from './services/menu.service';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
        StaffComponent,
    EmploymentComponent,
    JobComponent,
    AppHeaderComponent,
        MenuComponent,
    MenuItemComponent,
      ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), NgbModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

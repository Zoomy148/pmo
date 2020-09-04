import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaffComponent } from './routes/staff/staff.component';
import { EmploymentComponent } from './routes/employment/employment.component';
import { JobComponent } from './routes/job/job.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {MenuService} from './services/menu.service';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes/app-routes';
import { AppContentComponent } from './app-content/app-content.component';

@NgModule({
  declarations: [
    AppComponent,
        StaffComponent,
    EmploymentComponent,
    JobComponent,
    AppHeaderComponent,
        MenuComponent,
    MenuItemComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

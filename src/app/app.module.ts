import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StaffComponent } from './component/staff/staff.component';
import { EmploymentComponent } from './component/employment/employment.component';
import { JobComponent } from './component/job/job.component';
import { AppHeaderComponent } from './header/app-header.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { VacancyComponent } from './vacancy/vacancy.component';
import { MatSortModule} from '@angular/material/sort';
import { ClosedVacancyComponent } from './component/job/tabs/closed-vacancy/closed-vacancy.component';
import { ReadyStaffComponent } from './component/job/tabs/ready-staff/ready-staff.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TestPipe } from './Pipe/test.pipe';
import {ExitAboutGuard} from './component/job/exit.about.guard';
import {AboutGuard} from './component/job/about.guard';
import { NewEmployeeComponent } from './component/job/tabs/ready-staff/new-employee/new-employee.component';
import { AuthComponent } from './component/auth/auth.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations:
    [
    AppComponent,
    StaffComponent,
    EmploymentComponent,
    JobComponent,
    AppHeaderComponent,
    VacancyComponent,
    ClosedVacancyComponent,
    ReadyStaffComponent,
    TestPipe,
    NewEmployeeComponent,
    AuthComponent,
    ],
  entryComponents: [ VacancyComponent],
  imports:
    [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      NgbModule,
      MatToolbarModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatDialogModule,
      MatSortModule,
      FormsModule,
      MatButtonToggleModule,
      ReactiveFormsModule,
      MatFormFieldModule,
    ],
  providers: [ExitAboutGuard, AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

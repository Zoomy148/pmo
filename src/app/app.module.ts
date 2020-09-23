import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StaffComponent } from './component/staff/staff.component';
import { EmploymentComponent } from './component/employment/employment.component';
import { JobComponent } from './component/job/job.component';
import { AppHeaderComponent } from './header/app-header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ClosedVacancyComponent } from './component/job/tabs/closed-vacancy/closed-vacancy.component';
import { ReadyStaffComponent } from './component/job/tabs/ready-staff/ready-staff.component';
import { TestPipe } from './Pipe/test.pipe';
import { ExitAboutGuard } from './component/job/exit.about.guard';
import { AboutGuard} from './component/job/about.guard';
import { NewEmployeeComponent } from './component/job/tabs/ready-staff/new-employee/new-employee.component';
import { AuthComponent } from './component/auth/auth.component';
import { TitleService } from './services/title.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { NewVacansyComponent } from './component/job/tabs/closed-vacancy/new-vacansy/new-vacansy.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    EmploymentComponent,
    JobComponent,
    AppHeaderComponent,
    ClosedVacancyComponent,
    ReadyStaffComponent,
    TestPipe,
    NewEmployeeComponent,
    AuthComponent,
    NewVacansyComponent
  ],
  entryComponents: [ ],
  imports: [
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
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  providers: [ExitAboutGuard, AboutGuard , TitleService , DataService, AuthService],
  bootstrap: [AppComponent],
  exports:[  ]
})
export class AppModule { }

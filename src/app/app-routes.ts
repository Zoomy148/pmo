import {Routes} from '@angular/router';
import {EmploymentComponent} from './component/employment/employment.component';
import {JobComponent} from './component/job/job.component';
import {StaffComponent} from './component/staff/staff.component';
import {ExitAboutGuard} from './component/job/exit.about.guard';
import {AboutGuard} from './component/job/about.guard';
import {NewEmployeeComponent} from './component/job/tabs/ready-staff/new-employee/new-employee.component';
import {AuthComponent} from './component/auth/auth.component';
import {NewVacansyComponent} from './component/job/tabs/closed-vacancy/new-vacansy/new-vacansy.component';
export const appRoutes: Routes = [
  { path: 'staff' , component: StaffComponent, canActivate: [ AboutGuard ] },

  { path: 'employment', component: EmploymentComponent, canActivate: [ AboutGuard ] },

  { path: 'job', component: JobComponent },

  { path: 'addnew', component: NewEmployeeComponent, canDeactivate: [ ExitAboutGuard ] },

  { path: '', component: AuthComponent },

  { path: 'newvacancy', component: NewVacansyComponent , canDeactivate: [ ExitAboutGuard ] }

];

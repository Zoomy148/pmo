import {Routes} from '@angular/router';
import {EmploymentComponent} from './component/employment/employment.component';
import {JobComponent} from './component/job/job.component';
import {StaffComponent} from './component/staff/staff.component';
import {ExitAboutGuard} from './guards/exit.about.guard';
import {AboutGuard} from './guards/about.guard';
import {AuthComponent} from './component/auth/auth.component';
import {NewVacansyComponent} from './component/job/tabs/closed-vacancy/new-vacansy/new-vacansy.component';
import {MainPageComponent} from './component/main-page/main-page.component';
export const appRoutes: Routes = [
  { path: 'staff' , component: StaffComponent, canActivate: [ AboutGuard ] },

  { path: 'employment', component: EmploymentComponent, canActivate: [ AboutGuard ] },

  { path: 'job', component: JobComponent ,  },

  { path: '', component: AuthComponent },

  { path: 'newvacancy', component: NewVacansyComponent , canDeactivate: [ ExitAboutGuard ] },

  { path: 'home', component: MainPageComponent , }

];

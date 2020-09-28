import {Routes} from '@angular/router';
import {EmploymentComponent} from './component/employment/employment.component';
import {JobComponent} from './component/job/job.component';
import {StaffComponent} from './component/staff/staff.component';
import {ExitAboutGuard} from './guards/exit.about.guard';
import {AboutGuard} from './guards/about.guard';
import {AuthComponent} from './component/auth/auth.component';
import {NewVacansyComponent} from './component/job/tabs/closed-vacancy/new-vacansy/new-vacansy.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {CommerceCardComponent} from './pages/commerce-card/commerce-card.component';
import {PresalePagesComponent} from './pages/presale-pages/presale-pages.component';
import {StaffCardComponent} from './pages/staff-card/staff-card.component';
import {VacancyCardComponent} from './pages/vacancy-card/vacancy-card.component';
export const appRoutes: Routes = [
  { path: 'staff' , component: StaffComponent, canActivate: [ AboutGuard ] },

  { path: 'employment', component: EmploymentComponent, canActivate: [ AboutGuard ] },

  { path: 'job', component: JobComponent , canActivate: [ AboutGuard ]  },

  { path: '', component: AuthComponent },

  { path: 'newvacancy', component: NewVacansyComponent , canDeactivate: [ ExitAboutGuard ] , canActivate: [ AboutGuard ] },

  { path: 'home', component: MainPageComponent , canActivate: [ AboutGuard ] },

  { path: 'home/card/:id', component: CommerceCardComponent  },

  { path: 'home/page/:id', component: PresalePagesComponent  },

  { path: 'staff/card/:number', component: StaffCardComponent },

  {path: 'job/card/:number', component: VacancyCardComponent}

];

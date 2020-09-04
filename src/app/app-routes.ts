import {Routes} from '@angular/router';
import {EmploymentComponent} from './component/employment/employment.component';
import {JobComponent} from './component/job/job.component';
import {StaffComponent} from './component/staff/staff.component';
export const appRoutes: Routes = [
  {path: 'staff' , component: StaffComponent},

  {path: 'employment', component: EmploymentComponent},

  {path: 'job', component: JobComponent},

];

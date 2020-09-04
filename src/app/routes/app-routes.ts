import {Routes} from '@angular/router';
import {EmploymentComponent} from './employment/employment.component';
import {JobComponent} from './job/job.component';
import {StaffComponent} from './staff/staff.component';
export const appRoutes: Routes =[
  {path: 'staff' , component: StaffComponent},

  {path: 'employment', component: EmploymentComponent},

  {path: 'job', component: JobComponent},

]

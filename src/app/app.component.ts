import { Component } from '@angular/core';
import { AboutGuard } from './component/job/about.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
      public auth: AboutGuard
  ) {
      setInterval(() => {
          console.log(this.auth.check);
      }, 1000)
  }
}

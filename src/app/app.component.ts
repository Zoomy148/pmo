import { Component } from '@angular/core';
import { AboutGuard } from './guards/about.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
      public auth: AboutGuard
  ) {}
}

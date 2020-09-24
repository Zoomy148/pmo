import {
  Component,
  Injectable,
  OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  nav(): void {
    this.router.navigate(['/main']);
  }
  constructor(public router: Router) {}

  ngOnInit(): void {
  }
}

import {Component, Injectable, OnInit} from '@angular/core';
import { AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  providers: [AuthService]
})
export class AppHeaderComponent implements OnInit {



  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.auth.showHeader() + 'HEADER');
}}

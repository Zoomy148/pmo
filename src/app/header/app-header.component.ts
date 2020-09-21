import {Component, Injectable, OnInit} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {
  }
}

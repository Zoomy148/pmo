import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.css']
})
export class StaffCardComponent implements OnInit {
  number: number;
  public subscription: Subscription;
  constructor(public activateRoute: ActivatedRoute ) {
    this.subscription = activateRoute.params.subscribe(params => this.number = params['number']);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commerce-card',
  templateUrl: './commerce-card.component.html',
  styleUrls: ['./commerce-card.component.css']
})
export class CommerceCardComponent implements OnInit {
  id: number;
  public subscription: Subscription;
  constructor(public activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {}

}

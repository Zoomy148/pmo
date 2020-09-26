import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-presale-pages',
  templateUrl: './presale-pages.component.html',
  styleUrls: ['./presale-pages.component.css']
})
export class PresalePagesComponent implements OnInit {
  id: number;
  public subscription: Subscription;
  constructor( public  activateRoute: ActivatedRoute)
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
  }

}

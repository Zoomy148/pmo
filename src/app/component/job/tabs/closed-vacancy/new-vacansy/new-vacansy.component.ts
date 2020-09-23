import {Component, OnInit} from '@angular/core';
import { ComponentCanDeactivate } from '../../../exit.about.guard';
import { Observable } from 'rxjs';
import { DataService, vancy } from '../../../../../services/data.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-new-employee',
  templateUrl: './new-vacansy.component.html',
  styleUrls: ['./new-vacansy.component.scss'],
  providers: [DataService ]
})

export class NewVacansyComponent implements OnInit, ComponentCanDeactivate {
  constructor(
    public dataService: DataService,
    public router: Router
  ) { }
  saved: boolean = false;
  newVacancy: vancy ;
  save(){
    this.saved = true;
  }
  addVacancy( NewVacancy ): void {
    this.dataService.addVacancy( NewVacancy );
    this.router.navigate(['/job']);
  }
  canDeactivate(): boolean | Observable<boolean>{
    if ( !this.saved ) {
      return confirm('Вы хотите покинуть страницу?');
    }
    else {
      return true;
    }
  }
  ngOnInit(): void {
    this.newVacancy = this.dataService.getVacancy();
  }
}

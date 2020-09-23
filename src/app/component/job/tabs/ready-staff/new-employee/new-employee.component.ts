import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../../../exit.about.guard';
import { Observable } from 'rxjs';
import { DataService, rowsa } from '../../../../../services/data.service';



@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
  providers: [DataService ]
})
export class NewEmployeeComponent implements OnInit, ComponentCanDeactivate {
  constructor(public dataService: DataService) { }
  saved: boolean = false;
  NewEmployee: rowsa;
  addEmployes(NewEmployee) {
    this.dataService.addEmployee(NewEmployee);
  }
  save(){
    this.saved = true;
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
    this.NewEmployee = this.dataService.getMass();
    console.log(this.NewEmployee);
  }
}

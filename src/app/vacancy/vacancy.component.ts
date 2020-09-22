import {
  Component,
  EventEmitter,
  Input,
  Output } from '@angular/core';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent  {
 @Input() rows: any[] = [];
 @Output() addmass1 = new EventEmitter();

  mass2 = {
    number: '',
    name: '',
    position: '',
    date: '',
    procent: '',
    status: ''
  };

 public addmass(rows,mass2) {
   rows = rows.concat(mass2);
   console.log(rows);
}
  constructor() { }
}

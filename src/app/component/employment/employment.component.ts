import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {


  headers =
    [
      {
        number: '#',
        name: ' ФИО',
        position: ' Должность',
        month: ' Текущий месяц',
        monthone: ' Текущий месяц+1',
        monthwo: 'Текущий месяц+2',
        monththree: ' Текущий месяц+3',
      }
    ];

  rows =
   [
      {
        number: ' 1',
        name: 'Леоньтев В.К.',
        position: 'Разработчик',
        month: 'ЛКС',
        monthone: 'ЛКС',
        monthwo: 'ЛКС',
        monththree: 'ЛКС',

      }
    ];



  constructor() { }

  ngOnInit(): void {
  }

}

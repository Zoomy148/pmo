import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
  providers: []
})
export class EmploymentComponent implements OnInit {
  headers = [
      {
        number: '#',
        name: ' ФИО',
        group: ' Группа',
        position: ' Должность',
        month: ' Текущий месяц',
        monthone: ' Текущий месяц+1',
        monthwo: 'Текущий месяц+2',
        monththree: ' Текущий месяц+3',
      }
  ];

  rows = [
      {
        number: ' 1',
        name: 'Леоньтев В.К.',
        group: 'Разработчик',
        position: 'Ведущий разработчик',
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

import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {VacancyComponent} from '../../vacancy/vacancy.component';

// export interface TableItem{
//   position: number;
//   projectname: string;
//   contact: string;
//   vacancy: string;
//   quantity: number;
//   date: number;
//   status: string;
// }

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  headers = ['ФИО', 'Контактное лицо', 'Должность', 'С какого числа свободен', '%', 'Статус заявки'];
  headers1 = ['№', 'Проект', 'Контактное Лицо', 'Вакансия', 'Кол-во', 'Срок-работ по проекту', 'Статус заявки'];

  rows = [
    {
      ФИО: '1',
      'Контактное лицо': 'Rage',
      Должность: '18',
      'С какого числа свободен': '10',
      '%': '100',
      'Статус заявки': 'Open'
    }
  ];
  rowsp = [
    {
      '№': '1',
      Проект: 'Rage',
      'Контактное Лицо': '18',
      Вакансия: '10',
      'Кол-во': '100',
      'Статус заявки': 'Открыта',
      'Срок-работ по проекту': 'open',
    }
  ];

  constructor( public dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(VacancyComponent);
  }


  ngOnInit(): void {
  }
}


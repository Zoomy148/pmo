import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {VacancyComponent} from '../../vacancy/vacancy.component';
import { MatSort} from '@angular/material/sort';
import { Sort} from '@angular/material/sort';



export interface rowsa{
  number: number;
  name: string;
  contact: string;
  position: string;
  date: string;
  procent: string;
  status: string; }


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  headers = [{
    number: '№',
    name: 'ФИО сотрудника',
    contact: 'Контактное лицо',
    position: 'Должность',
    date: 'С какого числа свободен',
    procent: '%',
    status: 'Статус заявки'}];
  headers1 = [{
    number: '№',
    project: 'Проект',
    contact: 'Контактное Лицо',
    vacancy: 'Вакансия',
    quantity: 'Кол-во',
    date: 'Срок-работ по проекту',
    status: 'Статус заявки'
  }];
  rows: rowsa[] = [

    {number: 1,
      name: 'Никитин Д.Ф.',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'},
    {number: 2,
      name: 'Валерьев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'},
    {number: 3,
      name: 'Алешин',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'закрыта'},
    {number: 4,
      name: 'Друзь.',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'},
    {number: 5,
      name: 'Камышев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'закрыта'},


  ];
  rowsp = [
    {
      number: '1',
      project: 'ВМС РФ',
      contact: 'Лютик Н.А.',
      vacancy: 'Разработчик',
      quantity: '10',
      date: '28.01.2020-28.02.2020',
      status: 'открыта'
    },

  ];
  sortedData: rowsa[];



  constructor( public dialog: MatDialog) {
    this.sortedData = this.rows.slice();
  }
  openDialog(){
    this.dialog.open(VacancyComponent);
  }
  sortData(sort: Sort) {
    const data = this.rows.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        default:
          return 0;

      }
    });
  }}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



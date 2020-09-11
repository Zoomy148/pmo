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
  status: string;
}


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  name: string = '';
  name1: string = 'Введите фамилию сотрудника';



  headers = [
      {
    number: '№',
    name: 'ФИО сотрудника',
    contact: 'Контактное лицо',
    position: 'Должность',
    date: 'С какого числа свободен',
    procent: '%',
    status: 'Статус заявки'
      }
    ];
  headers1 = [
    {
    number: '№',
    project: 'Проект',
    contact: 'Контактное Лицо',
    vacancy: 'Вакансия',
    quantity: 'Кол-во',
    date: 'Срок-работ по проекту',
    status: 'Статус заявки'
    }
  ];
public  rows: rowsa[] = [

    {
      number: 1,
      name: 'Никитин Д.Ф.',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'
    },
    {
      number: 2,
      name: 'Валерьев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'
    },
    {
      number: 3,
      name: 'Алешин',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'закрыта'
    },
    {
      number: 4,
      name: 'Друзь',
      contact: 'Иванов В.В.',
      position: 'Стажер',
      date: '27.03.2020',
      procent: '100',
      status: 'открыта'
    },
    {
      number: 5,
      name: 'Камышев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      status: 'закрыта'
    },


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
  mass2 =
    {
      number: 1,
      name: '',
      position: '',
      date: '',
      procent: '',
      status: ''
    }
  ;
  sortedData: rowsa[];



  constructor( public dialog: MatDialog) {
    this.sortedData = this.rows.slice();
  }
  openDialog(){
    this.dialog.open(VacancyComponent);
  }
  onSortDirection(showActive: boolean){
  if (showActive){
     this.sortedData = this.rows.filter((row) => row.status === 'открыта');
  } else {
     this.sortedData = this.rows.filter((rows) => rows.status === 'закрыта');
  }}
 onSortAlpha(){
    this.sortedData = this.rows.sort(function(a, b)
        {const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
         if (nameA < nameB)
           { return -1; }
         if (nameA > nameB)
           { return 0; }});
 }
 public kiki(status) {
    console.log(status);
 }
 public search(name, name1){
  if ( name1 === 'Введите фамилию сотрудника' ){
   this.sortedData = this.rows.filter((rows) => rows.name === name);}
  else { this.sortedData = this.rows.filter((rows) => rows.position === name) ;}
  }
 public change() {
    let name2 = 'Введите должность сотрудника';
    if(this.name1 === 'Введите фамилию сотрудника')
    {this.name1 = name2 ;}
    else{this.name1 = 'Введите фамилию сотрудника' ;}
 }
 addSotr(sortedData, mass2) {
    this.sortedData = sortedData.concat(mass2);

 }
}

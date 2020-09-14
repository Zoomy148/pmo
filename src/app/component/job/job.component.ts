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
  isOpen: boolean ;
}


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  name: string = '';
  isSearchByName: boolean = true;
  condition: boolean = true;




  headers = [
      {
    number: '№',
    name: 'ФИО сотрудника',
    contact: 'Контактное лицо',
    position: 'Должность',
    date: 'С какого числа свободен',
    procent: '%',
    status: 'Cтатус заявки'
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
      isOpen: true
    },
    {
      number: 2,
      name: 'Валерьев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      isOpen: true
    },
    {
      number: 3,
      name: 'Алешин',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      isOpen: false
    },
    {
      number: 4,
      name: 'Друзь',
      contact: 'Иванов В.В.',
      position: 'Стажер',
      date: '27.03.2020',
      procent: '100',
      isOpen: true
    },
    {
      number: 5,
      name: 'Камышев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '27.03.2020',
      procent: '100',
      isOpen: true
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
      isOpen: true ,
    }
  ;
  sortedData: rowsa[];



  constructor( public dialog: MatDialog) {
    this.sortedData = this.rows.slice();
  }
  // openDialog(){
  //   this.dialog.open(VacancyComponent);
  // }
  onSortDirection(showActive: boolean){
  if (showActive){
     this.sortedData = this.rows.filter((row) => row.isOpen = true);
  } else {
     this.sortedData = this.rows.filter((rows) => rows.isOpen = false);
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
 public search(name, name1): void {
    if ( name1 ) {
     this.sortedData = this.rows.filter((rows) => rows.name === name);
    } else {
      this.sortedData = this.rows.filter((rows) => rows.position === name);
    }
  }
 public change() {
    this.isSearchByName = !this.isSearchByName;
 }

 addSotr(sortedData, mass2) {
    this.sortedData = sortedData.concat(mass2);

 }
 toogle(){
    this.condition = !this.condition;
 }
addTrue(mass2){
    mass2.isOpen = false;
}
}

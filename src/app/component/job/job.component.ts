import { Component, OnInit } from '@angular/core';
import {rowsa} from '../../services/data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: []
})
export class JobComponent implements OnInit{

  public  DataStaff: rowsa[] = [
    {
      number: 1,
      name: 'Никитин Д.Ф.',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '2020,01,10',
      procent: '100',
      isOpen: true
    },
    {
      number: 2,
      name: 'Валерьев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '2020,01,10',
      procent: '100',
      isOpen: true
    },
    {
      number: 3,
      name: 'Алешин',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '2020,01,10',
      procent: '100',
      isOpen: false
    },
    {
      number: 4,
      name: 'Друзь',
      contact: 'Иванов В.В.',
      position: 'Стажер',
      date: '2020,01,10',
      procent: '100',
      isOpen: true
    },
    {
      number: 5,
      name: 'Камышев',
      contact: 'Иванов В.В.',
      position: 'Руководитель',
      date: '2020,01,10',
      procent: '100',
      isOpen: true
    },
];
  NewEmployee: rowsa = {
    number: 1,
    name: '',
    position: '',
    contact: '',
    date: '',
    procent: '',
    isOpen: true ,
  };

  addEmployee( NewEmployee): void {
    this.DataStaff.push(NewEmployee);
  }


  constructor() {}

 ngOnInit(): void {}
}

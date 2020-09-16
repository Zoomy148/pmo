import { Component, OnInit } from '@angular/core';
import {rowsa} from '../../services/data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: []
})
export class JobComponent implements OnInit{

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
  NewEmployee: rowsa = {
    number: 1,
    name: '',
    position: '',
    contact: '',
    date: '',
    procent: '',
    isOpen: true ,
  };

  addSotr( NewEmployee) {
    this.rows.push(NewEmployee);
  }


  constructor() {}

 ngOnInit(): void {}
}

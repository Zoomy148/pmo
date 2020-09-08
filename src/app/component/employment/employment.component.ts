import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  headers = ['#', 'ФИО', 'Должность', 'Текущий месяц', 'Текущий месяц+1', 'Текущий месяц+2', 'Текущий месяц+3' ];
  rows = [
    {
      '#': '1',
      ФИО: 'Rage',
      Должность: '18',
      'Текущий месяц': '10',
      'Текущий месяц+1': '100',
      'Текущий месяц+2': '100',
      'Текущий месяц+3': '100',
    }];



  constructor() { }

  ngOnInit(): void {
  }

}

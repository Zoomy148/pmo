import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  headers = ['ФИО', 'Группа', 'Должность', 'Руководитель', 'Апрель?'];
  rows = [
    {
      ФИО: '1',
      Группа: 'Rage',
      Должность: '18',
      Руководитель: '10',
      'Апрель?': '100'
    },
    {
      ФИО: '2',
      Группа: 'fsdfsdf',
      Должность: '234',
      Руководитель: '1234',
      'Апрель?': '132400'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

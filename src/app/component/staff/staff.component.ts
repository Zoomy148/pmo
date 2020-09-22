import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers: []
})
export class StaffComponent implements OnInit {
  headers = [
    {
      number: ' №',
      name: ' ФИО',
      group: ' Группа',
      position: ' Должность',
      leader: ' Руководитель',
      project: ' Проект'
    }
  ];

  rows = [
        {
          number: ' 1',
          name: ' Жмышенко Валерий Альбертович',
          group: ' Разработчики',
          position: ' Ведущий разработчик',
          leader: ' Руководитель1',
          project: ' ЛКЗ ТММ  '
        }
    ];

  constructor() { }

  ngOnInit(): void { }
}

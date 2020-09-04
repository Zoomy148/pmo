import {MenuItem} from '../services/menu.service';

export const AppmenuItems: Array<MenuItem> = [
  { text: 'Сотрудники по отделам',
  route: '/staff'},
  { text: 'Занятость сотрудников',
    route: '/employment'},
  { text: 'Вакансии',
    route: '/job' },
];

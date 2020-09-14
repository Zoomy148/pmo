

export class HeaderService{
  headers = [
    {
      number: '№',
      name: 'ФИО сотрудника',
      contact: 'Контактное лицо',
      position: 'Должность',
      date: 'С какого числа свободен',
      procent: '%',
      status: 'Cтатус заявки'
    }];
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

  getData(){
    return this.headers;

  }
  getData1(){
    return this.headers1;
  }

  constructor() {
  }
}

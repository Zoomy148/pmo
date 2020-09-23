

export class TitleService{
  title = [
    {
      number: '№',
      name: 'ФИО сотрудника',
      contact: 'Контактное лицо',
      position: 'Должность',
      date: 'С какого числа свободен',
      procent: '%',
      status: 'Cтатус заявки',
      changeStatus: '',
    }
  ];
  title1 = [
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
    return this.title;
  }
  getData1(){
    return this.title1;
  }
  constructor() {}
}

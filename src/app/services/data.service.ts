// tslint:disable-next-line:class-name
export interface rowsa{
  number: number;
  name: string;
  contact: string;
  position: string;
  date: string;
  procent: string;
  isOpen: any ;
}
export interface vancy {
  number: number;
  project: string;
  contact: string;
  vacancy: string;
  quantity: string;
  date: string;
  status: true;
}

export class DataService{
  name: string = '';
  isSearchByName: boolean = true;
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
  VacancyData = [
    {
      number: '1',
      project: 'ВМС РФ',
      contact: 'Лютик Н.А.',
      vacancy: 'Разработчик',
      quantity: '10',
      date: '28.01.2020-28.02.2020',
      status: true
    },
    {
      number: '2',
      project: 'ВМС РФ',
      contact: 'Петров',
      vacancy: 'Разработчик',
      quantity: '10',
      date: '28.01.2020-28.02.2020',
      status: false
    },
    {
      number: '3',
      project: 'ВМС РФ',
      contact: 'Лодяный',
      vacancy: 'Разработчик',
      quantity: '10',
      date: '28.01.2020-28.02.2020',
      status: true
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
  NewVacancy: vancy = {
    number: 1,
    project: '',
    contact: '',
    vacancy: '',
    quantity: '',
    date: '',
    status: true
  };
  sortedData: rowsa[];

  addEmployee( NewEmployee): void {
    this.sortedData.push(NewEmployee);
    console.log(this.sortedData);
  }
  addVacancy( NewVacancy ): void {
    this.VacancyData.push(NewVacancy);
    console.log(this.VacancyData);
  }
  getRowsp() {
      return this.VacancyData;
  }
  getSortedData() {
      return this.sortedData;
  }
  getDataStaff() {
      return this.DataStaff;
      console.log(this.sortedData);
  }
  getMass() {
    return this.NewEmployee;
  }
  getVacancy() {
    return this.NewVacancy
  }
  constructor() {
    this.sortedData = this.DataStaff.slice();
  }
}

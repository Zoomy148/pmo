// tslint:disable-next-line:class-name
export interface rowsa{
  number: number;
  name: string;
  contact: string;
  position: string;
  date: string;
  procent: string;
  isOpen: boolean ;
}

export class DataService{
  name: string = '';
  isSearchByName: boolean = true;
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
  VacancyData = [
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
  NewEmployee = {
    number: 1,
    name: '',
    position: '',
    date: '',
    procent: '',
    isOpen: true ,
  };
  sortedData: rowsa[];

  addSotr( NewEmployee) {
    this.sortedData.push(NewEmployee);
  }

  getRowsp(){
      return this.VacancyData;
  }
  getSortedData() {
      return this.sortedData;
  }
  getRows() {
      return this.rows;
  }
  getMass() {
    return this.NewEmployee;
  }


  constructor() {
    this.sortedData = this.rows.slice();
  }
}

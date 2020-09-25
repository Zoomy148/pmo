// tslint:disable-next-line:class-name
export interface rowsa {
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
export interface commerce {
  id: number;
  shortName: string;
  direction: string;
  projectDirector: string;
  activeStage: string;
  statusStage: string;
}
export interface presale {
  id: number;
  direction: string;
  customer: string;
  project: string;
  responsible: string;
  stage: string;
  status: string;
}
export interface stage {
  commerceStage: string;
  satusStage: string;
  requisites: string;
  deadline: string;
  status: string;
  date: string;
  sum: string;
}
export interface file {
  num: number;
  filename: string;
  place: string;
  description: string;
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
  commerceDataArchive: commerce[] =
    [
      {
        id: 1231,
        shortName: 'ТММЕД',
        direction: 'Направление 1',
        projectDirector: 'Руководитель 1',
        activeStage: 'Этап 1' ,
        statusStage: 'Статус 1'
      },
      {
        id: 123123,
        shortName: 'ТММЕД',
        direction: 'Направление 2',
        projectDirector: 'Руководитель 3',
        activeStage: 'Этап 4' ,
        statusStage: 'Статус 1'
      }

  ];
  commerceDataActive: commerce[] =
    [
      {
        id: 76,
        shortName: 'Aльянс',
        direction: 'Направление 1',
        projectDirector: 'Руководитель 1',
        activeStage: 'Этап 1' ,
        statusStage: 'Статус 1'
      },
      {
        id: 234,
        shortName: 'Aльянс',
        direction: 'Направление 1',
        projectDirector: 'Руководитель 1',
        activeStage: 'Этап 1' ,
        statusStage: 'Статус 1'
      }

  ];
  presaleDataArchive: presale[] =
    [
      {
        id: 1,
        direction: 'Направление 1',
        customer: 'Кокосов Андрей',
        project: 'Проект 1',
        responsible: 'Ответственный 1',
        stage: 'Этап 1',
        status: 'Статус 1',
      }
    ];
  presaleDataActive: presale[] =
    [
      {
        id: 11,
        direction: 'Направление 2',
        customer: 'Геннадий Аранович',
        project: 'Проект 2',
        responsible: 'Ответственный 2',
        stage: 'Этап 2',
        status: 'Статус 2',
      }
    ];
  commerceDataStage: stage[] =
    [
      {
        commerceStage: 'Этап 1 ',
        satusStage: 'Статус этапа 1',
        requisites: 'Номер заказа: 1234567890',
        deadline: '01.01.2020',
        status: 'Подписан',
        date: '01.01.2020 08.04.2020',
        sum: '300'
      }
    ];
  commerceDataFile: file[] =
    [
      {
        num: 1,
        filename: 'Файл №1.pdf',
        place: 'Проект',
        description: 'Описание'
      }
    ];
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
    return this.NewVacancy;
  }
  getCommerceDataArchive() {
    return this.commerceDataArchive;
  }
  getCommerceDataActive() {
    return this.commerceDataActive;
  }
  getPresaleDataArchive() {
    return this.presaleDataArchive;
  }
  getPresaleDataActive() {
    return this.presaleDataActive;
  }
  getCommerceStage() {
    return this.commerceDataStage;
  }
  getCommercefile() {
    return this.commerceDataFile;
  }
  constructor() {
    this.sortedData = this.DataStaff.slice();
  }
}

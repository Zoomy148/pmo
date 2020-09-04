import {Injectable} from '@angular/core';
export interface MenuItem{
  text: string;
  route: string;
}
@Injectable()
export class MenuService{
  items: Array<MenuItem>;

}

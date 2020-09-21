import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 check: boolean;
  getAuf(login, password){
    if (login === 'admin' && password === 'admin')
    { return this.check = true; }
    else { return  this.check = false; }
  }


getAufChecked(): boolean {
   return this.check;
}
  cons(){
   console.log(this.getAufChecked());
  }

  constructor() { }
}

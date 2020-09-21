import { Injectable } from '@angular/core';
import { AboutGuard } from '../component/job/about.guard';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 check = false;
  getAuf(login, password){
    if (login === 'admin' && password === 'admin')
    { this.aboutGuard.check = true;
      this.check = true;
      }
    else { this.aboutGuard.check = false; }
  }


showHeader(){
   return this.check;
}


  cons(){
   console.log(this.showHeader() + 'сотояние хедера');
  }

  constructor(public aboutGuard: AboutGuard) { }
}

import { Injectable } from '@angular/core';
import { AboutGuard } from '../component/job/about.guard';
import { HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 users: User[] = [];
  getAuf(login, password) {
    for (const user of this.users) {
      if (login === user.name && password === user.password) {
          this.aboutGuard.check = true;
      }
    }
  }

  constructor(public aboutGuard: AboutGuard, public http: HttpClient, public  httpService: HttpService) {
        this.httpService.getData().subscribe(
            (data) => {
                this.users = data["userList"];
                console.log(this.users);
            });
  }
}

import { Injectable } from '@angular/core';
import { AboutGuard } from '../guards/about.guard';
import { HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 users: any = [];
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

import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]

})
export class AuthComponent implements OnInit {
  login = '';
  password = '';
  constructor(public authService: AuthService) {}
  getAuth(login, password) {
        this.authService.getAuf(login , password);
     }
  cons(){
    this.authService.cons();
  }

  ngOnInit(): void {
  }

}

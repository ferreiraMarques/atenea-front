import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage/session-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  private SESSION_TOKEN = environment
  errorMessage:string = "";
  isLoggedIn:boolean = false;
  constructor(private authService: AuthService, 
    private sesionStorage: SessionStorageService,
    private router: Router) { }

  ngOnInit(): void {this.authService.verifySession();}

  onSubmit(): void {
    console.log(this.authService.verificaAutenticacion());
    const { username, password } = this.form;
    const session = {
      logged: true,
      username: '',
      email: '',
      accessToken: '',
      userID: '',
      roles: []
    }
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        console.log(data.roles)
        session.userID = data.id;
        session.username = data.username;
        session.email = data.email;
        session.roles = data.roles;
        session.logged = true;
        this.sesionStorage.setJsonValue(this.SESSION_TOKEN.sessionToken, session);
        this.router.navigate(['/panel']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        session.logged = false;
      }
    });
  }
}

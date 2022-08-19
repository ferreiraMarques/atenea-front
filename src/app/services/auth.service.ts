import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../core/services/local-storage/local-storage.service';
const AUTH_API: any = environment.baseApiAuth;
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  // .set('Accept', 'application/json')
  //   .set('Content-Type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*')
  //   .set('X-IBM-Client-Id', '81188330-c768-46fe-a378-ff3ac9e88824')
  //   .set('Access-Control-Allow-Credentials', 'true')
  //   .set("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT")
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private localStorage: LocalStorageService) {}

  login(username: string, password:string): Observable<any>{
    const data = {username, password};
    return this.http.post(`${AUTH_API}signin`, data, httpOptions);
  }

  register(username: string, email:string, password:string): Observable<any>{
    const data = {username, email, password};
    return this.http.post(`${AUTH_API}signup`, data, httpOptions);
  }

  logout(): Observable<any>{
    return this.http.post(`${AUTH_API}/signout`, {}, httpOptions);
  }

  verificaAutenticacion() {
    if (!this.localStorage.isLogged) {
      return false;
    }
    return true;
  }
}

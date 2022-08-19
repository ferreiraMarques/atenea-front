import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const KEY_ENCRIPTER = environment.keyUsers;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public addUser(user:any):void{
    window.sessionStorage.removeItem(KEY_ENCRIPTER);
    window.sessionStorage.setItem(KEY_ENCRIPTER, JSON.stringify(user));
  }

  public getUser():any{
    const user = window.sessionStorage.getItem(KEY_ENCRIPTER);
    if(user){
      return JSON.parse(user);
    }
    return {};
  }

  public isLogged():boolean{
    const user = window.sessionStorage.getItem(KEY_ENCRIPTER);
    if(user){
      return true;
    }
    return false;
  }

  clean():void{
    window.sessionStorage.clear();
  }
}

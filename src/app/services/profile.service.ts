import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  API_URL:any = environment.baseUri
  constructor(private http: HttpClient) { }
  
  addProfile(obj:any, id:number):Observable<any>{
    return this.http.post(`${this.API_URL}/api/profile/${id}`, obj);
  }

  showProfile(id:number){
    return this.http.get(`${this.API_URL}/api/profile/${id}`)
  }
}

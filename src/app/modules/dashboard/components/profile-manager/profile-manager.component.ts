import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/core/services/session-storage/session-storage.service';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss']
})
export class ProfileManagerComponent implements OnInit {
  SESSION_TOKEN: any = environment.sessionToken;
  get auth(){
    return this.sessionStorage.getJsonValue(this.SESSION_TOKEN);
  }
  constructor(private profile: ProfileService,
    private sessionStorage: SessionStorageService) { }

  addProfile(){
    const data = {
      "first_name": "Fernando",
      "last_name": "Sapene",
      "direction": "El paraiso",
      "phone": "04120948650"
    }
    this.profile.addProfile(data, this.auth.userID)
      .subscribe(resp => {
        console.log(resp);
      })
  }

  ngOnInit(): void {
    this.profile.showProfile(this.auth.userID)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}

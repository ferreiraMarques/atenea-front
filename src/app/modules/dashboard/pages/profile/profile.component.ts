import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage/session-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { AccountDTO } from 'src/app/services/models/accountDto';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  atenea = '/assets/atenea.jpg';
  hidePassword = true;
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  directionFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  SESSION_TOKEN:any = environment.sessionToken;
  constructor(private profile: ProfileService,
    private sessionStorage: SessionStorageService,
    private router: Router) { }

    get auth(){
      return this.sessionStorage.getJsonValue(this.SESSION_TOKEN)
    }

  loginUser() {
    if (
      !this.firstNameFormControl.valid ||
      !this.lastNameFormControl.valid ||
      !this.directionFormControl.valid||
      !this.phoneFormControl.valid
    )
      return;
    
      const obj:any = { firstName: this.firstNameFormControl?.value, 
                        lastName: this.lastNameFormControl?.value, 
                        direction: this.directionFormControl?.value,
                        phone: this.phoneFormControl?.value,
                  }
    this.profile.addProfile(obj, this.auth.userID).subscribe({
      next: data => {
        this.router.navigate(['/panel']);
      },
      error: err => {
        console.log(err);
      }
    });
  }



  ngOnInit(): void {}




}


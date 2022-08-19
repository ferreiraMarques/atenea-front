import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

  currentUser: any;
  constructor(private storageService: LocalStorageService) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

}

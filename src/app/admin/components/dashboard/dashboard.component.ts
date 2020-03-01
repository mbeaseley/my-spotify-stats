import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User = new User();

  constructor(private storageService: StorageService, private userService: UserService) { }

  /**
   * gets tokens from url
   * @param locationHash - location hash key
   */
  getAccessTokenFromUrl(locationHash: string): string {
    return locationHash.split('').slice(14).slice(0, -34).join('');
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.userService.getUser().then(user => this.user = user);
    if (document.location.href.indexOf('#') > -1) {
      const accessToken = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', accessToken);
      document.location.href = '/dashboard';
    }
  }

}

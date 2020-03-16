import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/classes/user';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { environment } from 'Environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  login: boolean = false;

  logo: string = `${environment.route}assets/img/spotifytool.png`;

  constructor(
    private auth: AuthoriseService,
    private storageService: StorageService,
    private userService: UserService) { }

  /**
   * on click
   */
  onClick(): void {
    window.location.href = this.auth.logIn();
  }

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
    const accessToken = this.storageService.getLocalStorageItem()

    if (accessToken?.length) {
      this.userService.getUser().then(user => this.user = user);
      this.login = true;
    }

    if (document.location.href.indexOf('#') > -1) {
      const accessTokenInUrl = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', accessTokenInUrl);
      document.location.href = environment.route;
    }
  }

}

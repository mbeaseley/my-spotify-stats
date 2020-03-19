import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/classes/user';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { environment } from 'Environments/environment';
import { ErrorService } from 'Shared/services/error.service';
import { Error } from '../../../shared/classes/error';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  login: boolean = false;
  loading: boolean = false;

  logo: string = `${environment.route}assets/img/spotifytool.png`;

  constructor(
    private auth: AuthoriseService,
    private storageService: StorageService,
    private userService: UserService,
    private errorService: ErrorService) { }

  /**
   * on click
   */
  onClick(): void {
    this.loading = true;
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
  ngOnInit(): any {
    this.login = false;
    // Handle github reload issue
    if (performance.navigation.type === 1) {
      document.location.href = environment.route;
    }

    const accessToken = this.storageService.getLocalStorageItem();
    if (accessToken?.length) {
      this.loading = true;
      this.login = true;
      return this.userService.getUser().then(user => {
        this.user = user;
        this.loading = false;
      }).catch(() => {
        this.storageService.removeLocalStorageItem();
        setTimeout(() => {
          this.loading = false;
          this.login = false;
          const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
          this.errorService.callError('', error);
        }, 100);
      });
    }

    if (document.location.href.indexOf('#') > -1) {
      const accessTokenInUrl = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', accessTokenInUrl);
      document.location.href = environment.route;
    }
  }

}

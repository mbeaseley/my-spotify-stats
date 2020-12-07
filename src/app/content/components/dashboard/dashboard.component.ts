import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/classes/user';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { environment } from 'Environments/environment';
import { ErrorService } from 'Shared/services/error.service';
import { Error } from '../../../shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  user: User;
  login: boolean = false;
  loading: boolean = false;

  logo: string = `${environment.route}assets/img/spotifytool.png`;

  @Output() stateChanged: EventEmitter<string> = new EventEmitter();

  constructor(
    private auth: AuthoriseService,
    private storageService: StorageService,
    private userService: UserService,
    private errorService: ErrorService,
    private attributeService: AttributeService,
  ) {}

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
    this.attributeService.updatePageState('login');
    this.login = false;
    // Handle github reload issue
    const perfEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (perfEntry.type === 'reload') {
      document.location.href = environment.route;
    }

    const activeSession = this.storageService.getSessionStorageItem('is-active');
    if (!activeSession) {
      return this.storageService.setSessionStorageItem('is-active', 'true');
    }

    const accessToken = this.storageService.getLocalStorageItem();
    if (accessToken?.length) {
      this.loading = true;
      this.login = true;
      return this.userService
        .getUser()
        .then((user) => {
          this.user = user;
          this.loading = false;
          this.attributeService.updatePageState('dashboard');
        })
        .catch(() => {
          this.storageService.removeLocalStorageItem();
          this.storageService.removeLocalStorageItem('access-token-date');
          setTimeout(() => {
            this.loading = false;
            this.login = false;
            if (activeSession) {
              const error = new Error(
                'Access Token Error',
                'Access token expired, new token is needed.',
              );
              this.errorService.callError('', error);
            }
          }, 100);
        });
    }

    if (document.location.href.indexOf('#') > -1) {
      const accessTokenInUrl = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', accessTokenInUrl);
      this.storageService.setLocalStorageItem('access-token-date', dayjs().format());
      document.location.href = environment.route;
    }
  }
}

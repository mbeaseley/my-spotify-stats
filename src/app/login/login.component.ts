import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { StorageService } from 'Shared/services/storage.service';
import { SharedModule } from 'Shared/shared.module';
import * as dayjs from 'dayjs';
import { NavigationStart, Router } from '@angular/router';
import { AttributeService } from 'Shared/services/attribute.service';
import { LoadingService } from 'Shared/services/loading.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule, LazyLoadImageModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authoriseService: AuthoriseService,
    private storageService: StorageService,
    private router: Router,
    private attributeService: AttributeService,
    private loadingService: LoadingService,
  ) {}

  /**
   * on click
   */
  onClick(): void {
    this.loadingService.toggle(true);
    window.location.href = this.authoriseService.logIn();
  }

  /**
   * gets tokens from url
   * @param locationHash - location hash key
   */
  getAccessTokenFromUrl(locationHash: string): string {
    return locationHash.split('').slice(14).slice(0, -34).join('');
  }

  onImageLoad(): void {
    setTimeout(() => {
      this.loadingService.toggle(false);
    }, 2000);
  }

  /**
   * On load
   */
  ngOnInit(): Promise<boolean | void> | void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.attributeService.updatePageState('login');
      }
    });

    const token = this.storageService.getLocalStorageItem();
    if (token) {
      return this.router.navigate(['dashboard'], { skipLocationChange: true });
    }

    this.attributeService.updatePageState('login');
    // Handle github reload issue
    // const perfEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    // if (perfEntry.type === 'reload') {
    //   document.location.href = environment.route;
    // }

    if (document.location.href.indexOf('#') > -1) {
      const t = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', t);
      this.storageService.setLocalStorageItem('access-token-date', dayjs().format());

      return this.router.navigate(['dashboard'], { skipLocationChange: true });
    }
  }
}

import { Component, OnInit, ErrorHandler } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { StorageService } from 'Shared/services/storage.service';
import { AttributeService } from 'Shared/services/attribute.service';
import * as dayjs from 'dayjs';
import { LoadingService } from 'Shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showNav: boolean;
  errorMessage: ErrorHandler;
  loading: boolean = true;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private attributeService: AttributeService,
    private loadingService: LoadingService,
  ) {}

  // /**
  //  * Checks if token is useable still
  //  */
  // checkAccessTokenDate(): boolean {
  //   let tokenDate: any = this.storageService.getLocalStorageItem('access-token-date');

  //   // Check if token exists
  //   if (!tokenDate?.length) {
  //     return false;
  //   }

  //   // checks if token is after current date/time
  //   tokenDate = dayjs(tokenDate).add(10, 'minute');
  //   if (dayjs().isAfter(tokenDate)) {
  //     this.storageService.removeLocalStorageItem('access-token-date');
  //     return false;
  //   }
  //   return true;
  // }

  /**
   * on init
   */
  ngOnInit(): void {
    // Whenever route changes, trigg
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.loadingService.toggle(true);
      }
    });
  }
}

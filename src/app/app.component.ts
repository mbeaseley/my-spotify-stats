import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'Shared/services/storage.service';
import { AttributeService } from 'Shared/services/attribute.service';
import * as dayjs from 'dayjs';

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
    // this.checkAccessTokenDate();
    // this.attributeService.updatePageState('login');
    // this.router.events.subscribe(() => {
    //   setTimeout(() => {
    //     this.showNav =
    //       this.checkAccessTokenDate() && !!this.storageService.getLocalStorageItem()?.length;
    //   }, 200);
    // });
  }
}

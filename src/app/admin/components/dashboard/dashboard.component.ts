import { Component, OnInit } from '@angular/core';
import { StorageService } from 'Shared/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private storageService: StorageService) { }

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
    if (document.location.href.indexOf('#') > -1) {
      const accessToken = this.getAccessTokenFromUrl(location.hash);
      this.storageService.setLocalStorageItem('access-token', accessToken)
      document.location.href = '/dashboard';
    }
  }

}

import { Injectable } from '@angular/core';
import { AuthoriseModelService } from '../models/authorise-model.service';
import { StorageService } from './storage.service';
import { environment } from 'Environments/environment';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class AuthoriseService {
  constructor(
    private authModelService: AuthoriseModelService,
    private storageService: StorageService,
  ) {}

  /**
   * log out by removing access token and location of user to login
   */
  logOut(): void {
    this.storageService.removeLocalStorageItem('access-token');
    this.storageService.removeLocalStorageItem('access-token-date');
    window.location.href = environment.route;
  }

  /**
   * log in user
   */
  logIn(): string {
    return this.authModelService.logIn();
  }

  /**
   * Check if access token is valid
   * @returns boolean
   */
  check(): boolean {
    const token = this.storageService.getLocalStorageItem();
    const date = this.storageService.getLocalStorageItem('access-token-date');

    const maxTokenDate = dayjs(date).add(10, 'minute');
    if (!token || !date?.length || dayjs().isAfter(maxTokenDate)) {
      this.storageService.removeLocalStorageItem('access-token');
      this.storageService.removeLocalStorageItem('access-token-date');

      return false;
    }

    return true;
  }
}

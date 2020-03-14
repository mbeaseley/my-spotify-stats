import { Injectable } from '@angular/core';
import { AuthoriseModelService } from '../models/authorise-model.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoriseService {

  constructor(
    private authModelService: AuthoriseModelService,
    private storageService: StorageService) {}

  /**
   * log out by removing access token and location of user to login
   */
  logOut(): void {
    this.storageService.removeLocalStorageItem('access-token');
    window.location.href = '/';
  }

  /**
   * log in user
   */
  logIn(): string {
    return this.authModelService.logIn();
  }
}

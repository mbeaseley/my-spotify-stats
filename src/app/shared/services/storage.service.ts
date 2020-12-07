import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  isAccessSet = false;

  constructor() {}

  /**
   * set local storage item
   * @param itemName - item key
   * @param token - token key
   */
  setLocalStorageItem(itemName: string, token: string): void {
    this.isAccessSet = true;
    localStorage.setItem(itemName, token);
  }

  /**
   * gets local storage value
   * @param tokenName - token key
   */
  getLocalStorageItem(tokenName?: string): string {
    return localStorage.getItem(`${tokenName || 'access-token'}`);
  }

  /**
   * remove local storage
   * @param tokenName
   */
  removeLocalStorageItem(tokenName?: string): void {
    localStorage.removeItem(tokenName || 'access-token');
  }

  /**
   * Check if access token related items exist in local storage
   */
  checkAccessToken(): boolean {
    return (
      !!this.getLocalStorageItem()?.length &&
      !!this.getLocalStorageItem('access-token-date')?.length
    );
  }

  /**
   * set session storage item
   * @param itemName - item key
   * @param token - token key
   */
  setSessionStorageItem(itemName: string, token: string): void {
    this.isAccessSet = true;
    sessionStorage.setItem(itemName, token);
  }

  /**
   * gets session storage value
   * @param tokenName - token key
   */
  getSessionStorageItem(tokenName?: string): string {
    return sessionStorage.getItem(`${tokenName || 'access-token'}`);
  }

  /**
   * remove session storage value
   * @param tokenName
   */
  removeSessionStorageItem(tokenName?: string): void {
    sessionStorage.removeItem(tokenName || 'access-token');
  }
}

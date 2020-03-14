import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  isAccessSet = false;

  constructor() { }

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

  removeLocalStorageItem(tokenName?: string): void {
    localStorage.removeItem(tokenName);
  }
}

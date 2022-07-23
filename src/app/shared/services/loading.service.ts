import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  show$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  /**
   * Get current loading state
   */
  getState(): boolean {
    return this.show$.getValue();
  }

  /**
   * Toggle loading
   * @param value
   */
  toggle(value: boolean): void {
    this.show$.next(value);
  }
}

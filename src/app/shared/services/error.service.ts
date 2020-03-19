import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Error } from '../classes/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private updateError: BehaviorSubject<Error> = new BehaviorSubject<Error>(new Error());
  update$: Observable<Error> = this.updateError.asObservable();

  constructor(private router: Router) { }

  /**
   * get error value
   */
  getError(): Error {
    return this.updateError.getValue();
  }

  /**
   * Update error object
   * @param error
   */
  updateErrorObject(error: Error): void {
    this.updateError.next(error);
  }

  /**
   * Set error and go to route
   */
  callError(route: string, error: Error): void {
    this.updateErrorObject(error);
    this.router.navigate([route]);
  }
}

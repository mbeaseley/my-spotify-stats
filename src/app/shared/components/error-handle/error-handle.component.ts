import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.scss']
})
export class ErrorHandleComponent implements OnInit, OnDestroy {
  title: string;
  message: string;
  subscription: Subscription;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.subscription = this.errorService.update$.subscribe(error => {
      this.title = error.title;
      this.message = error.message;
    });
  }

  /**
   * on destroy
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

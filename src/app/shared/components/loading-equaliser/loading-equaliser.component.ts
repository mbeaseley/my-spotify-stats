import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { LoadingService } from 'Shared/services/loading.service';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':leave', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'app-loading-equaliser',
  templateUrl: './loading-equaliser.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./loading-equaliser.component.scss'],
})
export class LoadingEqualiserComponent implements OnInit, OnDestroy {
  show: boolean;

  bars = new Array(7);

  constructor(private loadingService: LoadingService) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.loadingService.show$.subscribe((state) => {
      this.show = state;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.loadingService.show$.unsubscribe();
  }
}

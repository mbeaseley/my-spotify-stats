import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':leave', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
]);

@Component({
  selector: 'app-loading-equaliser',
  templateUrl: './loading-equaliser.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./loading-equaliser.component.scss'],
})
export class LoadingEqualiserComponent {
  @Input() show: boolean = false;

  bars = new Array(7);
}

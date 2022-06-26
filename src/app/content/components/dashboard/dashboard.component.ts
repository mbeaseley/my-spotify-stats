import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { LoadingService } from 'Shared/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  @Output() stateChanged: EventEmitter<string> = new EventEmitter();

  constructor(private authoriseService: AuthoriseService, private loadingService: LoadingService) {}

  /**
   * On logging out
   */
  onLogout(): void {
    this.loadingService.toggle(true);
    this.authoriseService.logOut();
  }
}

import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AuthoriseService } from 'Shared/services/authorise.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  loading: boolean = false;

  @Output() stateChanged: EventEmitter<string> = new EventEmitter();

  constructor(private authoriseService: AuthoriseService) {}

  /**
   * On logging out
   */
  onLogout(): void {
    this.authoriseService.logOut();
  }
}

import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNav: boolean;
  errorMessage: ErrorHandler;
  loading: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showNav = (window.location.pathname !== '/');
    });
  }
}

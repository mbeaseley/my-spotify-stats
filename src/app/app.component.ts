import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'Shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNav: boolean;
  errorMessage: ErrorHandler;
  loading: boolean = true;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showNav = !!this.storageService.getLocalStorageItem()?.length;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  visible: boolean;

  constructor() { }

  onLogOut(): void {
    console.log('LOG OUT');
  }

  ngOnInit(): void {

  }
}

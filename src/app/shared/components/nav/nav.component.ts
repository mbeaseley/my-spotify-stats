import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  visible: boolean;
  showMenu: boolean;

  constructor() { }

  onLogOut(): void {
    console.log('LOG OUT');
  }

  onMenuShow(): void {
    this.showMenu = !this.showMenu ? true : false;
    console.log('showMenu', this.showMenu);
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.visible = window?.innerWidth < 767 ? true : false;
    this.showMenu = window?.innerWidth < 767 ? false : true;
  }

  ngOnInit(): void {
    this.onResize();
  }
}

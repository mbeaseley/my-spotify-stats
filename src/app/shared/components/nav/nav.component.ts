import { Component, OnInit, HostListener } from '@angular/core';
import { AuthoriseService } from '../../services/authorise.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  visible: boolean;
  showMenu: boolean;

  constructor(private auth: AuthoriseService) { }

  /**
   * removes token and takes user back to login
   */
  onLogOut(): void {
    this.auth.logOut();
  }

  /**
   * show drop down menu on mobile
   */
  onMenuShow(): void {
    this.showMenu = !this.showMenu ? true : false;
  }

  /**
   * host listening for window resize based on width to change between mobile and desktop navs
   */
  @HostListener('window:resize', [])
  onResize(): void {
    this.visible = window?.innerWidth < 767 ? true : false;
    this.showMenu = window?.innerWidth < 767 ? false : true;
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.onResize();
  }
}

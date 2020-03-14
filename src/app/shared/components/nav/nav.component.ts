import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AuthoriseService } from '../../services/authorise.service';
import { environment } from 'Environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() show: boolean;

  visible: boolean;
  showMenu: boolean;
  logo: string = `${environment.route}assets/img/spotifytool.png`;
  menu: string = `${environment.route}assets/img/menu.svg`;

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

import { Component, OnInit } from '@angular/core';
import { AuthoriseService } from 'Shared/services/authorise.service';
import { environment } from 'Environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo: string = `${environment.route}assets/img/spotifytool.png`;

  constructor(private auth: AuthoriseService) { }

  /**
   * on click
   */
  onClick(): void {
    window.location.href = this.auth.logIn();
  }

  /**
   * On onit
   */
  ngOnInit(): void {
  }

}

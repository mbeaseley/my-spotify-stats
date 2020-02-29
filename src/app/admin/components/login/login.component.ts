import { Component, OnInit } from '@angular/core';
import { AuthoriseService } from 'Shared/services/authorise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

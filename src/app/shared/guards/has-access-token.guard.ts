import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoriseService } from 'Shared/services/authorise.service';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private authoriseService: AuthoriseService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const check = this.authoriseService.check();

    if (!check) {
      return this.router.navigate(['']);
    } else {
      return true;
    }
  }
}

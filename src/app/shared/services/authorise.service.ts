import { Injectable } from '@angular/core';
import { AuthoriseModelService } from 'Shared/models/authorise-model.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoriseService {

  constructor(private authModelService: AuthoriseModelService) {}

  signIn(): string {
    return this.authModelService.signIn();
  }
}

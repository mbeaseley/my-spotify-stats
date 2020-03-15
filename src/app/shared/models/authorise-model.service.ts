import { Injectable } from '@angular/core';
import { environment } from 'Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthoriseModelService {
  private clientId: string;
  private redirectUri: string;
  private scopes: any = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-follow-read',
    'user-follow-modify',
    'user-top-read',
    'user-read-recently-played'
  ];
  private authEndpoint = 'https://accounts.spotify.com/authorize';


  constructor() {
    this.clientId = environment.clientID;
    this.redirectUri = `${location.href}callback`;
   }

   /**
    * returns string for url call
    */
  logIn(): string {
    return this.authEndpoint + '?client_id=' + this.clientId + '&redirect_uri='
      + encodeURIComponent(this.redirectUri) + '&scope='
      + encodeURIComponent(this.scopes.join('%20'))
      + '&response_type=token';
  }
}

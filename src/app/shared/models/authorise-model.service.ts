import { Injectable } from '@angular/core';

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
    'user-top-read'
  ];
  private authEndpoint = 'https://accounts.spotify.com/authorize';


  constructor() {
    this.clientId = 'c4e731729dd1416cb79d243310c9e4e5';
    this.redirectUri = `${location.href}dashboard`;
   }

   /**
    * returns string for url call
    */
  signIn(): string {
    return this.authEndpoint + '?client_id=' + this.clientId + '&redirect_uri='
      + encodeURIComponent(this.redirectUri) + '&scope='
      + encodeURIComponent(this.scopes.join('%20'))
      + '&response_type=token';
  }
}

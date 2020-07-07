import { Injectable } from '@angular/core';
import { environment } from 'Environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthoriseModelService {
  private clientId: string;
  private redirectUri: string;
  private scopes: any = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'user-library-read',
    'user-follow-read',
    'user-top-read',
    'user-read-recently-played',
  ];
  private authEndpoint = 'https://accounts.spotify.com/authorize';

  constructor() {
    this.clientId = environment.clientID;
    this.redirectUri = `${location.href}`;
  }

  /**
   * returns string for url call
   */
  logIn(): string {
    return (
      this.authEndpoint +
      '?client_id=' +
      this.clientId +
      '&redirect_uri=' +
      encodeURIComponent(this.redirectUri) +
      '&scope=' +
      encodeURIComponent(this.scopes.join('%20')) +
      '&response_type=token'
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Playlist } from '../classes/playlist';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class PlaylistModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/me/playlists';

  constructor(private storageService: StorageService, private http: HttpClient) { }

  private fromPayload(response: any): Playlist[] {
    const playlists = response.items.map((item: any) => {
      const playlist = new Playlist();
      playlist.id = item.id;
      playlist.name = item.name;
      playlist.description = item.description;
      playlist.owner = new User();
      playlist.owner = item.owner.id;
      playlist.owner = item.owner.name;
      playlist.owner = item.owner.uri;
      playlist.uri = item.uri;
      return playlist;
    });

    return playlists;
  }

  getUserPlaylist(): Promise<any> {
    return this.http.get(`${this.spotifyUrl}?limit=50&offset=0`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => {
      return this.fromPayload(res);
    });
  }
}

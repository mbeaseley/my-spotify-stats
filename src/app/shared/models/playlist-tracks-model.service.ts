import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { PlaylistTrack } from '../classes/playlist-track';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class PlaylistTracksModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/playlists/';

  constructor(private storageService: StorageService, private http: HttpClient) {}

  private fromPayload(response: any): PlaylistTrack[] {
    console.log(response);
    const playlistTracks = response.items.map(item => {
      const track = new PlaylistTrack();
      track.addedAt = item.added_at;
      track.addedBy = new User();
      return track;
    });

    return playlistTracks;
  }

  getPlaylistTracks(id: string): Promise<any> {
    return this.http.get(`${this.spotifyUrl}${id}/tracks`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => {
      return this.fromPayload(res);
    });
  }
}

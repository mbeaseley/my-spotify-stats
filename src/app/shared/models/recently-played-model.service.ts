import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'Shared/services/storage.service';
import { Track } from 'Shared/classes/track';
import { Artist } from 'Shared/classes/artist';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class RecentlyPlayedModelService {
  private spotifyUrl = 'https://api.spotify.com/';

  constructor(private storageService: StorageService, private http: HttpClient) { }

  private fromPayload(res: any): Track[] {
    const recentlyPlayedTracks = res.items.map(item => {
      const tk = new Track();
      tk.id = item.track.id;
      tk.trackName = item.track.name;
      // Map artist objects
      tk.artists = item.track.artists.map(artist => {
        const artistObj = new Artist();
        artistObj.id = artist.id;
        artistObj.artistName = artist.name;
        artistObj.externalLink = artist.external_urls.spotify;
        return artistObj;
      });
      tk.played = dayjs(item.played_at);
      tk.uri = item.track.uri;

      return tk;
    });

    return recentlyPlayedTracks;
  }

  getRecentlyPlayedSongs(): Promise<any> {
    return this.http.get(`${this.spotifyUrl}v1/me/player/recently-played?type=track&limit=50`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => this.fromPayload(res));
  }
}

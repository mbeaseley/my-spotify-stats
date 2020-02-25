import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'Shared/services/storage.service';
import { RecentlyPlayedTrack } from 'Shared/classes/recently-played-track';
import { Artist } from 'Shared/classes/artist';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class RecentlyPlayedModelService {
  private spotifyUrl = 'https://api.spotify.com/';
  
  constructor(private storageService: StorageService, private http: HttpClient) { }

  fromPayload(res: any): RecentlyPlayedTrack[] {
    const recentlyPlayedTracks = res.items.map(item => {
      const track = new RecentlyPlayedTrack();
      track.id = item.track.id;
      track.trackName = item.track.name;
      // Map artist objects
      track.artists = item.track.artists.map(artist => {
        const artistObj = new Artist();
        artistObj.id = artist.id;
        artistObj.artistName = artist.name;
        artistObj.externalLink = artist.external_urls.spotify;
        return artistObj;
      });
      track.played = dayjs(item.played_at);
      track.uri = item.track.uri;

      return track;
    });

    return recentlyPlayedTracks;
  }

  getRecentlyPlayedSongs(): Promise<any> {
    return this.http.get(`${this.spotifyUrl}v1/me/player/recently-played?type=track`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => this.fromPayload(res));
  }
}

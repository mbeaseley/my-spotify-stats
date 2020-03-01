import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../classes/artist';

@Injectable({
  providedIn: 'root'
})
export class TopArtistsModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/me/top/';

  constructor(private storageService: StorageService, private http: HttpClient) { }

  private fromPayload(response: any): Artist[] {
    const topArtists = response.items.map((item: any, index: number) => {
      const artist = new Artist();
      artist.id = item.id;
      artist.artistName = item.name;
      artist.artistImage = item.images[0].url;
      artist.externalLink = item.uri;
      artist.order = index + 1;
      return artist;
    });

    return topArtists;
  }

  getRecentlyPlayedSongs(type: string, timeRange: string): Promise<any> {
    return this.http.get(`${this.spotifyUrl}${type}?time_range=${timeRange}&limit=15`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => this.fromPayload(res));
  }
}

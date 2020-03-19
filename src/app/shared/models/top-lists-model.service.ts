import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../classes/artist';
import { Track } from '../classes/track';

@Injectable({
  providedIn: 'root'
})
export class TopListsModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/me/top/';

  constructor(private storageService: StorageService, private http: HttpClient) { }

  /**
   * payload response format
   * @param response
   */
  private fromPayload(response: any, isTrack: boolean): Artist[] | Track[] {
    const topList = response.items.map((item: any, index: number) => {
      if (isTrack) {
        const track = new Track();
        track.id = item.id;
        track.trackName = item.name;
        track.trackImage = item.album.images[0].url;
        track.artists = item.artists.map(a => {
          const artistObj = new Artist();
          artistObj.id = a.id;
          artistObj.artistName = a.name;
          artistObj.externalLink = a.external_urls.spotify;
          return artistObj;
        });
        track.uri = item.uri;
        return track;
      }

      const artist = new Artist();
      artist.id = item.id;
      artist.artistName = item.name;
      artist.artistImage = item.images[0].url;
      artist.externalLink = item.uri;
      artist.order = index + 1;
      return artist;
    });

    return topList;
  }

  /**
   * get top lists either artists or tracks
   * @param type
   * @param timeRange
   */
  getLists(type: string, timeRange: string): Promise<any> {
    return this.http.get(`${this.spotifyUrl}${type}?time_range=${timeRange}&limit=50`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => {
      return this.fromPayload(res, type === 'tracks' ? true : false);
    });
  }
}

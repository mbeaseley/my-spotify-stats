import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { PlaylistTrack } from '../classes/playlist-track';
import { User } from '../classes/user';
import { Artist } from 'Shared/classes/artist';
import { Track } from 'Shared/classes/track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistTracksModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/playlists/';

  constructor(private storageService: StorageService, private http: HttpClient) {}

  private fromPayload(response: any): PlaylistTrack[] {
    const playlistTracks = response.items.map(item => {
      const tk = new PlaylistTrack();
      tk.addedAt = item.added_at;
      tk.addedBy = new User();
      tk.addedBy.id = item.added_by.id;
      tk.addedBy.uri = item.added_by.uri;
      tk.track = new Track();
      tk.track.id = item.track.id;
      tk.track.trackName = item.track.name;
      // Map artist objects
      tk.track.artists = item.track.artists.map(artist => {
        const artistObj = new Artist();
        artistObj.id = artist.id;
        artistObj.artistName = artist.name;
        artistObj.externalLink = artist.external_urls.spotify;
        return artistObj;
      });
      tk.track.uri = item.track.uri;
      return tk;
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

  private params(playlistTrack: PlaylistTrack, playlistTrackIndex?: number): any {
    return [
      {
        uri: playlistTrack.track.id,
        positions: [playlistTrackIndex]
      }
    ];
  }

  deletePlaylistTrack(playlistId: string, playlistTrack: PlaylistTrack, playlistTrackIndex?: number): Promise<any> {
    return this.http.delete(`${this.spotifyUrl}${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem(),
        Accept: 'application/json',
        ContentTypes: 'application/json'
      },
      params: {tracks: JSON.stringify(this.params(playlistTrack, playlistTrackIndex))}
    }).toPromise();
  }
}

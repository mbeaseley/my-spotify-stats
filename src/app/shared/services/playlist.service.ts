import { Injectable } from '@angular/core';
import { PlaylistModelService } from '../models/playlist-model.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private playlistModelService: PlaylistModelService) { }

  getUserPlaylist(): Promise<any> {
    return this.playlistModelService.getUserPlaylist().then(playlists => {
      console.log(playlists);
      return playlists;
    });;
  }
}

import { Injectable } from '@angular/core';
import { PlaylistModelService } from '../models/playlist-model.service';
import { PlaylistTracksModelService } from '../models/playlist-tracks-model.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private playlistModelService: PlaylistModelService,
    private playlistTracksModel: PlaylistTracksModelService) {}

  getUserPlaylist(): Promise<any> {
    return this.playlistModelService.getUserPlaylist();
  }

  getPlaylistTracks(playlistId: string): Promise<any> {
    return this.playlistTracksModel.getPlaylistTracks(playlistId);
  }
}

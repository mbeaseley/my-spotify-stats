import { Injectable } from '@angular/core';
import { PlaylistModelService } from '../models/playlist-model.service';
import { PlaylistTracksModelService } from '../models/playlist-tracks-model.service';
import { PlaylistTrack } from 'Shared/classes/playlist-track';

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

  deleteTrackFromPlaylist(playlistId: string, playlistTrack: PlaylistTrack, playlistTrackIndex: number): Promise<any> {
    return this.playlistTracksModel.deletePlaylistTrack(playlistId, playlistTrack, playlistTrackIndex);
  }

  removeIdenticalTracks(playlistId: string, playlistTracks: PlaylistTrack[]): PlaylistTrack[] {
    let tracks = playlistTracks.map(track => track.track.id);
    tracks = Array.from(new Set(tracks));

    let removeTracks = tracks.map(tk => {
      const plistTracks = playlistTracks.slice();
      return plistTracks.filter(t => tk === t.track.id);
    });

    removeTracks = removeTracks.filter(tk => tk.length !== 1);
    removeTracks.forEach(tks => {
      const tracksIndex = tks.slice();
      console.log('length', tracksIndex);
      tks.forEach((track, i) => {
        console.log('Size', tracksIndex);
        if (tracksIndex.length > 1) {
          tracksIndex.splice(i, 1);
          return this.deleteTrackFromPlaylist(playlistId, track, i).then(console.log);
        }
      });
    });

    return null;
  }
}

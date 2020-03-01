import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/shared/services/playlist.service';
import { Playlist } from 'src/app/shared/classes/playlist';

@Component({
  selector: 'app-remove-duplicates',
  templateUrl: './remove-duplicates.component.html',
  styleUrls: ['./remove-duplicates.component.scss']
})
export class RemoveDuplicatesComponent implements OnInit {
  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): Promise<void> {
    return this.playlistService.getUserPlaylist().then(playlists => this.playlists = playlists);
  }

}

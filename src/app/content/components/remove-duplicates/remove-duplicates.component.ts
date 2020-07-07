import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlaylistService } from 'src/app/shared/services/playlist.service';
import { Playlist } from 'src/app/shared/classes/playlist';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AttributeService } from 'Shared/services/attribute.service';

@Component({
  selector: 'app-remove-duplicates',
  templateUrl: './remove-duplicates.component.html',
  styleUrls: ['./remove-duplicates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RemoveDuplicatesComponent implements OnInit {
  playlists: Playlist[] = [];
  playlistTracks: any[] = [];
  form: FormGroup;

  constructor(
    private playlistService: PlaylistService,
    private attributeService: AttributeService,
  ) {
    this.form = new FormGroup({
      playlist: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  onPlaylistSelected(): Promise<void> {
    const playlist = this.playlists.find((plist) => plist.name === 'test');
    return this.playlistService
      .getPlaylistTracks(playlist.id)
      .then((tracks) => {
        this.playlistTracks = tracks;
        return this.playlistService.removeIdenticalTracks(playlist.id, this.playlistTracks);
      })
      .then((results) => console.log(results));
  }

  ngOnInit(): Promise<void> {
    this.attributeService.updatePageState('remove-duplicates');

    return this.playlistService.getUserPlaylist().then((playlists) => (this.playlists = playlists));
  }
}

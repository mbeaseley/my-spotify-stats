import { Component, OnInit } from '@angular/core';
import { RecentlyPlayedService } from 'Shared/services/recently-played.service';
import { Track } from 'Shared/classes/track';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {
  tracks: Track[];

  constructor(private recentlyPlayedService: RecentlyPlayedService) { }

  /**
   * on click - open spotify uri link
   * @param spotifyUri  - uri link
   */
  onClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  /**
   * On Init
   */
  ngOnInit(): Promise<void> {
    return this.recentlyPlayedService.getRecentlyPlayedSong()
      .then(tracks => this.tracks = tracks);
  }

}

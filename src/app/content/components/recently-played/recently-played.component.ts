import { Component, OnInit } from '@angular/core';
import { RecentlyPlayedService } from '../../../shared/services/recently-played.service';
import { Track } from '../../../shared/classes/track';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from '../../../shared/classes/error';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {
  tracks: Track[];

  constructor(
    private recentlyPlayedService: RecentlyPlayedService,
    private errorService: ErrorService) {}

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
      .then(tracks => this.tracks = tracks).catch(() => {
        const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
        this.errorService.callError('', error);
      });
  }

}

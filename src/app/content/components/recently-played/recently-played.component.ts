import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecentlyPlayedService } from '../../../shared/services/recently-played.service';
import { Track } from '../../../shared/classes/track';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from '../../../shared/classes/error';
import { AttributeService } from 'Shared/utils/attribute.service';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecentlyPlayedComponent implements OnInit {
  tracks: Track[];
  loading: boolean = false;

  constructor(
    private recentlyPlayedService: RecentlyPlayedService,
    private errorService: ErrorService,
    private attributeService: AttributeService) {}

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
    this.attributeService.updatePageState('recently-played');

    this.loading = true;
    return this.recentlyPlayedService.getRecentlyPlayedSong()
      .then(tracks => {
        this.tracks = tracks;
        this.loading = false;
      })
      .catch(() => {
        const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
        this.errorService.callError('', error);
      });
  }

}

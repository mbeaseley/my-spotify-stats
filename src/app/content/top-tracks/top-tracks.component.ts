import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from 'Shared/shared.module';
import { ErrorService } from 'Shared/services/error.service';
import { Error } from 'Shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';
import { UserService } from 'Shared/services/user.service';
import { TopListTimeRange } from 'Shared/classes/api-typings/user';
import { StorageService } from 'Shared/services/storage.service';
import { LoadingService } from 'Shared/services/loading.service';
import { Track } from 'Shared/classes/user';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule, LazyLoadImageModule],
  styleUrls: ['./top-tracks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopTracksComponent implements OnInit {
  tabSelected: TopListTimeRange;
  tracks: Track[] = [];

  constructor(
    private errorService: ErrorService,
    private attributeService: AttributeService,
    private userService: UserService,
    private storageService: StorageService,
    private loadingService: LoadingService,
  ) {}

  /**
   * Get artists
   * @param timeRange
   * @returns Promise<void>
   */
  onGettingArtists(timeRange: TopListTimeRange): Promise<void> {
    this.loadingService.toggle(true);

    return this.userService
      .getTopTracks(timeRange, 50)
      .then((res) => {
        this.tracks = res;
        this.tabSelected = timeRange;
        setTimeout(() => {
          this.loadingService.toggle(false);
        }, 500);
      })
      .catch(() => {
        this.storageService.removeLocalStorageItem();
        this.storageService.removeLocalStorageItem('access-token-date');
        setTimeout(() => {
          this.loadingService.toggle(false);
          const error = new Error(
            'Access Token Error',
            'Access token expired, new token is needed.',
          );
          return this.errorService.callError('', error);
        }, 100);
      });
  }

  /**
   * On init
   */
  ngOnInit(): Promise<void> {
    this.attributeService.updatePageState('top-tracks');
    return this.onGettingArtists('long_term');
  }
}

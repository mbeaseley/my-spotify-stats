import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from 'Shared/shared.module';
// import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Artist } from 'src/app/shared/classes/artist';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from 'Shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';
import { UserService } from 'Shared/services/user.service';
import { TopListTimeRange } from 'Shared/classes/api-typings/user';
import { StorageService } from 'Shared/services/storage.service';
import { LoadingService } from 'Shared/services/loading.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule, LazyLoadImageModule],
  styleUrls: ['./top-artists.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopArtistsComponent implements OnInit {
  tabSelected: TopListTimeRange;
  artists: Artist[] = [];
  loading: boolean = false;

  constructor(
    private errorService: ErrorService,
    private attributeService: AttributeService,
    private userService: UserService,
    private storageService: StorageService,
    private loadingService: LoadingService,
  ) {}

  /**
   * on click - open spotify uri link
   * @param spotifyUri
   */
  onArtistClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  /**
   * Get artists
   * @param timeRange
   * @returns Promise<void>
   */
  onGettingArtists(timeRange: TopListTimeRange): Promise<void> {
    this.loadingService.toggle(true);

    return this.userService
      .getTopArtists(timeRange, 50)
      .then((res) => {
        this.artists = res;
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
    this.attributeService.updatePageState('top-artists');
    return this.onGettingArtists('long_term');
  }
}

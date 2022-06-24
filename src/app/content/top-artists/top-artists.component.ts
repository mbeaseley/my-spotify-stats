import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Artist } from 'src/app/shared/classes/artist';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from 'Shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';
import { UserService } from 'Shared/services/user.service';
import { TopListTimeRange } from 'Shared/classes/api-typings/user';
import { StorageService } from 'Shared/services/storage.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  standalone: true,
  styleUrls: ['./top-artists.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopArtistsComponent implements OnInit {
  tabSelected: string;
  artists: Artist[] = [];
  loading: boolean = false;

  constructor(
    private errorService: ErrorService,
    private attributeService: AttributeService,
    private userService: UserService,
    private storageService: StorageService,
  ) {}

  // /**
  //  * changes selection of tab and data
  //  * @param term
  //  * @param id
  //  */
  // onClick(term: string): void {
  // // // remove current active tab
  // // const currentActive = document.querySelector('.top-artists__tab-item--active');
  // // currentActive.classList.remove('top-artists__tab-item--active');
  // // // add current active tab to new element
  // // const element = document.querySelector(`#${id}`);
  // // element.classList.add('top-artists__tab-item--active');
  // // this.tabSelected = element.innerHTML;

  // this.loading = true;
  // return this.topListsService
  //   .topLists('artists', term)
  //   .then((artists: Artist[]) => {
  //     this.artists = artists;
  //     this.loading = false;
  //   })
  //   .catch(() => {
  //     // const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
  //     // this.errorService.callError('', error);
  //   });
  // }

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
    return this.userService
      .getTopArtists(timeRange, 50)
      .then((res) => {
        this.artists = res;
      })
      .catch(() => {
        this.storageService.removeLocalStorageItem();
        this.storageService.removeLocalStorageItem('access-token-date');
        setTimeout(() => {
          this.loading = false;
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

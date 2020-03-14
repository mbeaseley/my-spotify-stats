import { Component, OnInit } from '@angular/core';
import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Artist } from 'src/app/shared/classes/artist';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from '../../../shared/classes/error';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  tabSelected: string;
  artists: Artist[] = [];
  loading: boolean = false;

  constructor(
    private topListsService: TopListsService,
    private errorService: ErrorService) {}

  /**
   * changes selection of tab and data
   * @param term
   * @param id
   */
  onClick(term: string, id: string): void {
    // remove current active tab
    const currentActive = document.querySelector('.top-artists__tab-item--active');
    currentActive.classList.remove('top-artists__tab-item--active');
    // add current active tab to new element
    const element = document.querySelector(`#${id}`);
    element.classList.add('top-artists__tab-item--active');
    this.tabSelected = element.innerHTML;

    this.loading = true;
    return this.topListsService.topLists('artists', term)
      .then((artists: Artist[]) => {
        this.artists = artists;
        this.loading = false;
      })
      .catch(() => {
      const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
      this.errorService.callError('', error);
    });
  }

  /**
   * on click - open spotify uri link
   * @param spotifyUri
   */
  onArtistClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  /**
   * On init
   */
  ngOnInit(): Promise<void> {
    this.tabSelected = 'Last 4 Weeks';
    this.loading = true;
    return this.topListsService.topLists('artists', 'short_term')
      .then((artists: Artist[]) => {
        this.artists = artists;
        this.loading = false;
      })
      .catch(() => {
        const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
        this.errorService.callError('', error);
      }
    );
  }

}

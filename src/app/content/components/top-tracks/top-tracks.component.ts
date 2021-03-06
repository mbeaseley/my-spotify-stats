import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Track } from 'src/app/shared/classes/track';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from '../../../shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopTracksComponent implements OnInit {
  tabSelected: string;
  tracks: Track[] = [];
  loading: boolean = false;

  constructor(
    private topListsService: TopListsService,
    private errorService: ErrorService,
    private attributeService: AttributeService,
  ) {}

  onClick(term: string, id: string): void {
    // remove current active tab
    const currentActive = document.querySelector('.top-tracks__tab-item--active');
    currentActive.classList.remove('top-tracks__tab-item--active');
    // add current active tab to new element
    const element = document.querySelector(`#${id}`);
    element.classList.add('top-tracks__tab-item--active');
    this.tabSelected = element.innerHTML;

    this.loading = true;
    return this.topListsService
      .topLists('tracks', term)
      .then((tracks: Track[]) => {
        this.tracks = tracks;
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
  onTrackClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  ngOnInit(): Promise<void> {
    this.attributeService.updatePageState('top-tracks');

    this.tabSelected = 'Last 4 Weeks';
    this.loading = true;
    return this.topListsService
      .topLists('tracks', 'short_term')
      .then((tracks: Track[]) => {
        this.tracks = tracks;
        this.loading = false;
      })
      .catch(() => {
        const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
        this.errorService.callError('', error);
      });
  }
}

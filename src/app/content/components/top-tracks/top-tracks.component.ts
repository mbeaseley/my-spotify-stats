import { Component, OnInit } from '@angular/core';
import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Track } from 'src/app/shared/classes/track';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Error } from '../../../shared/classes/error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {
  tabSelected: string;
  tracks: Track[] = [];

  constructor(
    private topListsService: TopListsService, 
    private errorService: ErrorService, 
    private router: Router) { }

  onClick(term: string, id: string): void {
    // remove current active tab
    const currentActive = document.querySelector('.top-tracks__tab-item--active');
    currentActive.classList.remove('top-tracks__tab-item--active');
    // add current active tab to new element
    const element = document.querySelector(`#${id}`);
    element.classList.add('top-tracks__tab-item--active');
    this.tabSelected = element.innerHTML;
    return this.topListsService.topLists('tracks', term)
      .then(tracks => this.tracks = tracks)
      .catch(() => {
      const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
      this.errorService.callError('', error);
    });;
  }

  /**
   * on click - open spotify uri link
   * @param spotifyUri
   */
  onTrackClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  ngOnInit(): Promise<void> {
    this.tabSelected = 'Last 4 Weeks'
    return this.topListsService.topLists('tracks', 'short_term')
      .then(tracks => this.tracks = tracks)
      .catch(() => {
        const error = new Error('Access Token Error', 'Access token expired, new token is needed.');
        this.errorService.callError('', error);
      });
  }

}

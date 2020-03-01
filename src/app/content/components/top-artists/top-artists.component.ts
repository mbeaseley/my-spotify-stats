import { Component, OnInit } from '@angular/core';
import { TopListsService } from 'src/app/shared/services/top-lists.service';
import { Artist } from 'src/app/shared/classes/artist';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  tabSelected: string;
  artists: Artist[] = [];

  constructor(private topListsService: TopListsService) { }

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
    return this.topListsService.topLists('artists', term).then(artists => this.artists = artists);
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
    this.tabSelected = 'Last 4 Weeks'
    return this.topListsService.topLists('artists', 'short_term').then(artists => this.artists = artists);
  }

}

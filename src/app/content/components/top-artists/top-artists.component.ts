import { Component, OnInit } from '@angular/core';
import { TopArtistsService } from 'src/app/shared/services/top-artists.service';
import { Artist } from 'src/app/shared/classes/artist';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {
  tabSelected: string;
  artists: Artist[] = [];
  el: HTMLElement;

  constructor(private topArtistsService: TopArtistsService) { }

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
    return this.topArtistsService.topArtists('artists', term).then(artists => this.artists = artists);
  }

  /**
   * On init
   */
  ngOnInit(): Promise<void> {
    this.tabSelected = 'Last 4 Weeks'
    return this.topArtistsService.topArtists('artists', 'short_term').then(artists => this.artists = artists);
  }

}

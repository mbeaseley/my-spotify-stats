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

  constructor(private topArtistsService: TopArtistsService) { }

  ngOnInit(): void {
    this.topArtistsService.topArtists('artists', 'short_term').then(artists => this.artists = artists);
  }

}

import { Component, OnInit } from '@angular/core';
import { RecentlyPlayedService } from 'Shared/services/recently-played.service';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {

  constructor(private recentlyPlayedService: RecentlyPlayedService) { }

  ngOnInit(): void {
    this.recentlyPlayedService.getRecentlyPlayedSong().then(console.log);
  }

}

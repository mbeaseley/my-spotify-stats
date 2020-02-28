import { Injectable } from '@angular/core';
import { RecentlyPlayedModelService } from 'Shared/models/recently-played-model.service';

@Injectable({
  providedIn: 'root'
})
export class RecentlyPlayedService {

  constructor(private recentlyPlayedModel: RecentlyPlayedModelService) { }

  getRecentlyPlayedSong(): Promise<any> {
    return this.recentlyPlayedModel.getRecentlyPlayedSongs();
  }
}

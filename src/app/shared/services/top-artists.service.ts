import { Injectable } from '@angular/core';
import { TopArtistsModelService } from '../models/top-artists-model.service';

@Injectable({
  providedIn: 'root'
})
export class TopArtistsService {

  constructor(private topArtistsModel: TopArtistsModelService) { }

  topArtists(type: string, timeRange: string): any {
    return this.topArtistsModel.getRecentlyPlayedSongs(type, timeRange);
  }
}

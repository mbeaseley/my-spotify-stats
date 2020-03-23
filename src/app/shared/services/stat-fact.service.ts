import { Injectable } from '@angular/core';
import { RecentlyPlayedService } from './recently-played.service';
import { Track } from 'Shared/classes/track';

@Injectable({
  providedIn: 'root'
})
export class StatFactService {

  constructor(private recentlyPlayedService: RecentlyPlayedService) { }

  /**
   * Gets random fact string phrase
   */
  getRandomFact(): Promise<string> {
    return this.recentlyPlayedService.getRecentlyPlayedSong().then(tracks => {
      return this.getRandomArtistFact(tracks);
    });
  }

  /**
   * Gets random fact string based on recently played artists
   * @param tracks
   */
  private getRandomArtistFact(tracks: Track[]): string {
    const trackArtists = [];
    let mostFreq = 0;
    const artistObj = {};
    let which = [];
    tracks.forEach(track => {
      track.artists.forEach(artist => {
        trackArtists.push(artist.artistName);
      });
    });

    trackArtists.forEach(artist => {
      !artistObj[artist] ? artistObj[artist] = 1 : artistObj[artist]++;
      if (artistObj[artist] > mostFreq) {
        mostFreq = artistObj[artist];
        which = [artist];
      } else if (artistObj[artist] === mostFreq) {
        which.push(artist);
      }
    });

    return `Your most popular recent artist is <br><span>${which}</span> with <span>${mostFreq}</span> times.`;
  }
}

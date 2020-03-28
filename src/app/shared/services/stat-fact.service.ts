import { Injectable } from '@angular/core';
import { RecentlyPlayedService } from './recently-played.service';
import { Track } from 'Shared/classes/track';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Injectable({
  providedIn: 'root'
})
export class StatFactService {

  constructor(private recentlyPlayedService: RecentlyPlayedService) {
    dayjs.extend(relativeTime);
  }

  /**
   * Gets random fact string phrase
   */
  getRandomFact(): Promise<string> {
    return this.recentlyPlayedService.getRecentlyPlayedSong().then(tracks => {
      const randNumber = Math.floor(Math.random() * 2) + 1;
      return (randNumber === 1)
        ? this.getRandomTimeBasedFact(tracks)
          : this.getRandomArtistFact(tracks);
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

    console.log(which, artistObj, mostFreq)

    return `Your most popular recent artist is <br><span>${which}</span> with <span>${mostFreq}</span> times.`;
  }

  /**
   * Gets random fact string based on recently played times
   * @param tracks
   */
  private getRandomTimeBasedFact(tracks: Track[]): string {
    const lastPlayedTrack = tracks[0].clone();

    const endOfPlayed = lastPlayedTrack.played.add(lastPlayedTrack.trackDuration, 'ms');

    if (dayjs().isAfter(endOfPlayed)) {
      return `Last used spotify <br><span>${dayjs().from(endOfPlayed, true)}</span> ago.`;
    }

    return this.getRandomArtistFact(tracks);
  }
}

import * as clone from 'clone';
import * as dayjs from 'dayjs';
import { Artist } from './artist';

export class RecentlyPlayedTrack {
  id: string;
  trackName: string;
  artists: Artist[];
  played: dayjs.Dayjs;
  uri: string;

  constructor() {}

  clone(): RecentlyPlayedTrack {
    return clone(this);
  }
}
